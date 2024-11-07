import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { io } from "socket.io-client";
import { getAllMessagesService } from "@/services/chat/chat";
import { usePerfilStore } from "../perfil/perfil";

export const useChatStore = defineStore('chat', () => {
    const usePerfil = usePerfilStore();
    const messages = ref([]);
    const messagesCurrentUser = ref([]);
    const currentReceiver = ref('TK');
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
        console.log(dataMessages, 'Rodou a função')
        // Varre todas as mensagens
        for(let c = 0; c < dataMessages.length; c++) {
            console.log(c, dataMessages[c]);
            let userStored = false; // booleano que diz se o usuário já está armazenado em allUsers
            const senderOrReceiver = (dataMessages[c].sender === usePerfil.perfil.user.username) ? dataMessages[c].receiver : dataMessages[c].sender; // Pega o nome do usuário que me enviou ou recebeu a mensagem
            const myMessage = (dataMessages[c].sender === usePerfil.perfil.user.username) ? true : false;

            // Verifica se o usuário já está armazenado em allUsers
            for (let i = 0; i < allUsers.value.length; c++) {
                if (allUsers.value[i].user === senderOrReceiver) {
                    userStored = true;
                    if (dataMessages[c].receiver === usePerfil.perfil.user.username && !dataMessages[c].read) {
                        allUsers.value[i].numberMessagesUnread += 1;
                    };
                    break;
                };
            };
            // Se o usuário não estiver armazenado em allUsers
            if (!userStored) {
                allUsers.value.push({user: senderOrReceiver, numberMessagesUnread: (myMessage) ? 0 : 1, myMessage, lastMessage: dataMessages[c].message, read: dataMessages[c].read});
            };
        }
    };

    function sendMessage() {
        socket.emit("sendMessage", (usePerfil.perfil.user.username, currentReceiver.value, newMessage.value));
    }
    socket.on("receivedMessage", (userSender, msg) => {
        if (userSender === currentReceiver.value) {
            messagesCurrentUser.value.push(msg);
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
    })
    return { messages, allUsers, messagesCurrentUser, currentReceiver, state, newMessage, connectChat, saveUser, getAllMessages, sendMessage };
});