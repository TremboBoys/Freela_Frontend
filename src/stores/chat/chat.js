import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import { io } from "socket.io-client";
import { getAllMessagesService, updateMessage, getAllImagesService, updateImage } from "@/services/chat/chat";
import { usePerfilStore } from "../perfil/perfil";
import { useWarningStore } from "../warning/warning";

export const useChatStore = defineStore('chat', () => {
    const usePerfil = usePerfilStore();
    const useWarning = useWarningStore();
    const messages = ref([]);
    const messagesCurrentUser = ref([]);
    const currentReceiver = ref('');
    const infoCurrentReceiver = ref({});
    const allUsers = ref([]);
    const numberMessagesUnread = ref(0);
    const socket = io('https://microsservice-chat.onrender.com');

    const state = reactive({
        fileInput: null,
    });
    const newMessage = ref('');

    async function connectChat() {
        socket.on("connect", () => {
            console.log(socket.id);
        });

        await usePerfil.getPerfil();
        saveUser();
    }


    function saveUser() {
        socket.emit("saveUser", usePerfil.perfil.user.username);
    };

    async function initApp() {
        useWarning.state.isLoading = true;
        await connectChat();
        await usePerfil.getPerfis();
        await getAllMessages(usePerfil.perfil.user.username);
        useWarning.state.isLoading = false;
    }

    async function getAllMessages(nameUser) {
        try {
            const messagesData = await getAllMessagesService(nameUser);
            const images = await getAllImagesService(nameUser);
            console.log(images);
            messages.value = messagesData;
            if (Object.keys(images).length > 0) {
                images.forEach((image) => {
                    console.log(image);
                    messages.value.push({_id: image.public_id, sender: image.context.custom.user_sender, receiver: image.context.custom.user_receiver, dateTime: image.created_at, read: (image.context.custom.read === 'false') ? false : true, infoImage: { url: image.url, width: image.width, height: image.height }});
                })
            };
            messages.value = sortOldestMessages(messages.value);
            splitUsers(messages.value);
        } catch(error) {
            console.error('Error in GET "/messages/:nameUser": ', error);
        }
    };

    // Retorna um array ordenado da mensagem mais nova para a mais antiga
    function sortOldestMessages(dataMessages) {
        dataMessages.sort((a, b) => {
            return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
        });
        return dataMessages;
    };

    function splitUsers(dataMessages = []) { 
        // Crie um Map para busca rápida de usuários já armazenados
        const userMap = new Map();
        
        // numberMessagesUnread.value = 0;
        
        // Inicialize o Map com usuários existentes em allUsers para manter dados atuais
        allUsers.value.forEach(user => {
            userMap.set(user.user, user);
        });
    
        dataMessages.forEach(msg => {
            const isSender = msg.sender == usePerfil.perfil.user.username;
            const senderOrReceiver = isSender ? msg.receiver : msg.sender;
            const myMessage = isSender;
    
            if (userMap.has(senderOrReceiver)) {
                const user = userMap.get(senderOrReceiver);
    
                // Incrementa mensagens não lidas se o destinatário é o usuário atual e a mensagem não foi lida
                if (msg.receiver === usePerfil.perfil.user.username && !msg.read) {
                    user.numberMessagesUnread += 1;
                    console.log(msg.receiver, msg.message, msg.read, msg.user);
                    if (msg.receiver !== msg.sender) {
                        numberMessagesUnread.value += 1;
                    }
                    console.log(user.numberMessagesUnread);
                };
                
                // Atualiza a última mensagem
                if ("infoImage" in msg) {
                    user.lastMessage = "image"
                } else {
                    user.lastMessage = msg.message;
                }
                user._id = msg._id;
                user.read = msg.read
                user.myMessage = myMessage;
            } else {
                // Adiciona novo usuário no Map e no array `allUsers`
                const newUser = {
                    _id: msg._id,
                    user: senderOrReceiver,
                    numberMessagesUnread: myMessage ? 0 : (myMessage === false && msg.read) ? 0 : 1,
                    myMessage,
                    lastMessage: ("infoImage" in msg) ? 'image' : msg.message,
                    read: msg.read,
                    isTyping: false
                };
                numberMessagesUnread.value += myMessage ? 0 : (myMessage === false && msg.read) ? 0 : 1
                userMap.set(senderOrReceiver, newUser);
                allUsers.value.push(newUser);
            }
        });
    }    

    function sendMessage() {
        socket.emit("sendMessage", usePerfil.perfil.user.username, currentReceiver.value, newMessage.value);
        newMessage.value = '';
    };

    function uploadImage() {
        socket.emit("uploadImage", usePerfil.perfil.user.username, currentReceiver.value, state.fileInput);
        state.fileInput = null;
    };

    
    function openMessagesUser() {
        const filterNameCurrentUser = usePerfil.perfis.filter(user => user.user.username === currentReceiver.value);
        const filterMessages = sortOldestMessages(messages.value).filter(message => (message.sender === currentReceiver.value && message.receiver === usePerfil.perfil.user.username) || (message.sender === usePerfil.perfil.user.username && message.receiver === currentReceiver.value));
        messagesCurrentUser.value = filterMessages;
        infoCurrentReceiver.value = filterNameCurrentUser[0];
    };
    
    async function makeMessageRead(id, type) {
        socket.emit("notificationUpdateRead", usePerfil.perfil.user.username, currentReceiver.value, id);
        let data;
        if (type == 'message') {
            data = await updateMessage(id, {read: true});
            console.log(data);
        } else {
            data = await updateImage(id, currentReceiver.value, usePerfil.perfil.user.username);
            console.log(data);
        }

        if (data) {
            messages.value.forEach((message) => {
                if (message._id == id) {
                    message.read = true;
                }
            });
            messagesCurrentUser.value.forEach((message) => {
                if (message._id == id) {
                    message.read = true;
                }
            })
            allUsers.value.forEach((user) => {
                if (user.user == currentReceiver.value && user.numberMessagesUnread > 0) {
                    user.numberMessagesUnread -= 1;
                    numberMessagesUnread.value -= 1;
                };
            });
        };
    };

    function deleteMessageNotification(idMessage, type, idContainer) {
        socket.emit("notificationDeleteMessage", usePerfil.perfil.user.username, currentReceiver.value, idMessage, type);

        deleteMessage(usePerfil.perfil.user.username, idMessage);
    };

    function deleteMessage(userSender, idMessage) {
        if (userSender == currentReceiver.value || userSender == usePerfil.perfil.user.username) {
            messagesCurrentUser.value.forEach((message, index) => {
                if (message._id == idMessage) {
                    messagesCurrentUser.value.splice(index, 1);
                };
            });
        };
        messages.value.forEach((message, index) => {
            if (message._id == idMessage) {
                messages.value.splice(index, 1);
            };
        });
        setTimeout(() => {
            allUsers.value.forEach((user) => {
                console.log(user, idMessage, user._id == idMessage)
                if (user._id == idMessage) {
                    user.numberMessagesUnread = 0;
                    numberMessagesUnread.value = 0;
                    console.log(user);
                    splitUsers(messages.value);
                };
            });
        }, 100);
    };
    
    
    function formatDateAndHour(dateTime) {
        let hour = Number(dateTime.slice(11, 13));
        hour -= 3;
        if (hour < 0) {
            hour = (24 + hour);
        } else if (hour < 10) {
            hour = '0' + hour.toString();
        }
        else if (hour >= 24) {
            hour = hour - 24;
        }
        const dateFormat = dateTime.slice(0, 11) + hour.toString() + dateTime.slice(13, dateTime.length);
        return dateFormat.slice(11, 16);
    };
    
    socket.on("saveMessage", (_id, userSender, userReceiver, msg, dateTime, read) => {
        console.log('saveMessage chamado no frontend!', _id, userSender, userReceiver, msg, dateTime, read);
        console.log(userReceiver === currentReceiver.value);
        if (userReceiver === currentReceiver.value) {
            messagesCurrentUser.value.push({_id, sender: userSender, receiver: userReceiver, message: msg, dateTime, read});
            messages.value.push({_id, sender: userSender, receiver: userReceiver, message: msg, dateTime, read});
            splitUsers([{_id, sender: userSender, receiver: userReceiver, message: msg, dateTime, read}]);
        };
    });
    
    socket.on("receiveImage", (userSender, userReceiver, image) => {
        if (userSender === currentReceiver.value || userReceiver === currentReceiver.value) {
            messagesCurrentUser.value.push({_id: image.public_id, sender: userSender, receiver: userReceiver, dateTime: image.created_at, read: image.context.read, infoImage: { url: image.url, width: image.width, height: image.height }});
        };
        messages.value.push({_id: image.public_id, sender: userSender, receiver: userReceiver, dateTime: image.created_at, read: image.context.read, infoImage: { url: image.url, width: image.width, height: image.height }});
        
        const imageArray = [];
        imageArray.push({_id: image.public_id, sender: userSender, receiver: userReceiver, dateTime: image.created_at, read: image.context.read, infoImage: { url: image.url, width: image.width, height: image.height }});
        splitUsers(imageArray);
    });
    
    socket.on("receiveMessage", (_id, userSender, userReceiver, msg, dateTime, read) => {
        if (userSender === currentReceiver.value) {
            messagesCurrentUser.value.push({_id, sender: userSender, receiver: userReceiver, message: msg, dateTime: dateTime, read});
        }
        messages.value.push({_id, sender: userSender, receiver: userReceiver, message: msg, dateTime: dateTime, read});
        console.log(messages.value);
        const message = [];
        message.push({_id, sender: userSender, receiver: userReceiver, message: msg, dateTime, read});
        
        splitUsers(message);
    });
    
    socket.on("updateRead", (userSender, idMessage) => {
        console.log('Mensagem atualizada!', userSender === currentReceiver.value, userSender, currentReceiver.value);
        if (userSender === currentReceiver.value) {
            console.log('O usuário é atual!');
            messagesCurrentUser.value.forEach((message) => {
                if (message._id == idMessage) {
                    message.read = true;
                };
            });
        };
        messages.value.forEach((message) => {
            if (message._id == idMessage) {
                message.read = true;
            };
        });
        allUsers.value.forEach((user) => {
            if (user.user == userSender) {
                if (user.idMessage == idMessage) {
                    user.read = true;
                };
            };
        });
    });
    
    socket.on("deleteMessage", (userSender, idMessage) => {
        deleteMessage(userSender, idMessage);
    });
    
    socket.on("typing", (userSender) => {
        allUsers.value.forEach((user) => {
            if (user.user === userSender) {
                user.isTyping = true;
            }
        })
    });
    
    socket.on("untyping", (userSender) => {
        allUsers.value.forEach((user) => {
            if (user.user === userSender) {
                user.isTyping = false;
            }
        })
    });
    
    watch(() => newMessage.value, () => {
        if (newMessage.value !== '') {
            socket.emit("typing", usePerfil.perfil.user.username, currentReceiver.value);
        } else {
            socket.emit("untyping", usePerfil.perfil.user.username, currentReceiver.value);
        };
    });
    
    return { messages, allUsers, numberMessagesUnread, messagesCurrentUser, currentReceiver, infoCurrentReceiver, state, newMessage, connectChat, saveUser, initApp, getAllMessages, sendMessage, uploadImage, openMessagesUser, makeMessageRead, deleteMessageNotification, deleteMessage, formatDateAndHour };
});