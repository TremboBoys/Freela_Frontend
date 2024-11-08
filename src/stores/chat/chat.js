import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { io } from "socket.io-client";
import { getAllMessagesService } from "@/services/chat/chat";
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
    const socket = io('http://localhost:3333');

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
            const data = await getAllMessagesService(nameUser);
            messages.value = sortOldestMessages(data);
            splitUsers(data);
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

    // function sortNewestMessages(dataMessages) {
    //     dataMessages.sort((a, b) => {
    //         return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
    //     });
    //     return dataMessages;
    // };

    function splitUsers(dataMessages = []) {        
        // Crie um Map para busca rápida de usuários já armazenados
        const userMap = new Map();
        
        // Inicialize o Map com usuários existentes em allUsers para manter dados atuais
        allUsers.value.forEach(user => {
            userMap.set(user.user, user);
        });

        console.log(userMap, dataMessages);
    
        dataMessages.forEach(msg => {
            const isSender = msg.sender == usePerfil.perfil.user.username;
            const senderOrReceiver = isSender ? msg.receiver : msg.sender;
            const myMessage = isSender;
            console.log(msg.sender, usePerfil.perfil.user.username, isSender, myMessage);
    
            if (userMap.has(senderOrReceiver)) {
                const user = userMap.get(senderOrReceiver);
    
                // Incrementa mensagens não lidas se o destinatário é o usuário atual e a mensagem não foi lida
                if (msg.receiver === usePerfil.perfil.user.username && !msg.read) {
                    user.numberMessagesUnread += 1;
                }
                
                // Atualiza a última mensagem
                user.lastMessage = msg.message;
                user.myMessage = myMessage;
            } else {
                // Adiciona novo usuário no Map e no array `allUsers`
                const newUser = {
                    user: senderOrReceiver,
                    numberMessagesUnread: myMessage ? 0 : 1,
                    myMessage,
                    lastMessage: msg.message,
                    read: msg.read
                };
                userMap.set(senderOrReceiver, newUser);
                console.log(userMap);
                allUsers.value.push(newUser);
            }
        });
    }    

    function sendMessage() {
        console.log(usePerfil.perfil.user.username, currentReceiver.value, newMessage.value);
        socket.emit("sendMessage", usePerfil.perfil.user.username, currentReceiver.value, newMessage.value);
        const dateTime = new Date();
        messagesCurrentUser.value.push({sender: usePerfil.perfil.user.username, receiver: currentReceiver.value, message: newMessage.value, dateTime, read: false});
        splitUsers({sender: usePerfil.perfil.user.username, receiver: currentReceiver.value, message: newMessage.value, dateTime, read: false});
        newMessage.value = '';
    }
    socket.on("receiveMessage", (userSender, userReceiver, msg, dateTime, read) => {
        if (userSender === currentReceiver.value) {
            messagesCurrentUser.value.push({sender: userSender, receiver: userReceiver, message: msg, dateTime: dateTime, read});
        }
        console.log(userSender, userReceiver, msg, dateTime, read);
        const message = [];
        message.push({sender: userSender, receiver: userReceiver, message: msg, dateTime, read});
        console.log(message);

        splitUsers(message);
        //     let userExist = false;

        //     for (let c = 0; c < allUsers.value.length; c++) {
        //         if (allUsers.value[c].user === userSender) {
        //             allUsers.value[c].lastMessage = msg;
        //             allUsers.value[c].numberMessages += 1;
        //             userExist = true;
        //             break;
        //         }
        //     }
        //     if (!userExist) {
        //         allUsers.value.push({user: userSender, numberMessagesUnread: 1, myMessage: false, lastMessage: msg, read: false});
        //     };
        // }
    });

    function openMessagesUser() {
        const filterNameCurrentUser = usePerfil.perfis.filter(user => user.user.username === currentReceiver.value);
        const filterMessages = sortOldestMessages(messages.value).filter(message => message.sender === currentReceiver.value || message.receiver === currentReceiver.value);
        messagesCurrentUser.value = filterMessages;
        infoCurrentReceiver.value = filterNameCurrentUser[0];
        console.log(infoCurrentReceiver.value);
    };

    return { messages, allUsers, messagesCurrentUser, currentReceiver, infoCurrentReceiver, state, newMessage, connectChat, saveUser, initApp, getAllMessages, sendMessage, openMessagesUser };
});