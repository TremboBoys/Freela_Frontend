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
    const messagesReceivedCurrentUser = ref([]);
    const messagesSentCurrentUser = ref([]);
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
            messages.value = data;
            splitUsers(sortNewestMessages(data));
        } catch(error) {
            console.error('Error in GET "/messages/:nameUser": ', error);
        }
    };

    // Retorna um array ordenado da mensagem mais nova para a mais antiga
    function sortNewestMessages(dataMessages) {
        dataMessages.sort((a, b) => {
            return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
        });
        return dataMessages;
    };

    function splitUsers(dataMessages = []) {
        console.log(dataMessages, 'Rodou a função');
        
        // Crie um Map para busca rápida de usuários já armazenados
        const userMap = new Map();
        
        // Inicialize o Map com usuários existentes em allUsers para manter dados atuais
        allUsers.value.forEach(user => {
            userMap.set(user.user, user);
        });
    
        dataMessages.forEach(msg => {
            const isSender = msg.sender === usePerfil.perfil.user.username;
            const senderOrReceiver = isSender ? msg.receiver : msg.sender;
            const myMessage = isSender;
    
            if (userMap.has(senderOrReceiver)) {
                const user = userMap.get(senderOrReceiver);
    
                // Incrementa mensagens não lidas se o destinatário é o usuário atual e a mensagem não foi lida
                if (msg.receiver === usePerfil.perfil.user.username && !msg.read) {
                    user.numberMessagesUnread += 1;
                }
    
                // Atualiza a última mensagem
                user.lastMessage = msg.message;
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
                allUsers.value.push(newUser);
            }
        });
    }    

    function sendMessage() {
        console.log(usePerfil.perfil.user.username, currentReceiver.value, newMessage.value);
        socket.emit("sendMessage", (usePerfil.perfil.user.username, currentReceiver.value, newMessage.value));
    }
    socket.on("receivedMessage", (userSender, msg) => {
        if (userSender === currentReceiver.value) {
            messagesReceivedCurrentUser.value.push(msg);
        } else {
            let userExist = false;
            for (let user of allUsers) {
                if (user.user === userSender) {
                    allUsers.value[userSender].lastMessage = msg;
                    allUsers.value[userSender].numberMessages += 1;
                    break;
                };
            };
            if (!userExist) {
                allUsers.value.push({user: userSender, numberMessagesUnread: 1, myMessage: false, lastMessage: msg, read: false});
            };
        }
    });

    function openMessagesUser() {
        const filterNameCurrentUser = usePerfil.perfis.filter(user => user.user.username === currentReceiver.value);
        const filterMessagesReceived = messages.value.filter(message => message.sender === currentReceiver.value);
        const filterMessagesSent = messages.value.filter(message => message.receiver === currentReceiver.value);
        messagesReceivedCurrentUser.value = filterMessagesReceived;
        messagesSentCurrentUser.value = filterMessagesSent;
        infoCurrentReceiver.value = filterNameCurrentUser[0];
        console.log(infoCurrentReceiver.value);
    };

    return { messages, allUsers, messagesReceivedCurrentUser, messagesSentCurrentUser, currentReceiver, infoCurrentReceiver, state, newMessage, connectChat, saveUser, initApp, getAllMessages, sendMessage, openMessagesUser };
});