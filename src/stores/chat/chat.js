import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { io } from "socket.io-client";
import { getAllMessagesService } from "@/services/chat/chat";

export const useChatStore = defineStore('chat', () => {
    const messages = ref([]);
    const currentReceiver = ref(null);
    const allUsers = ref([]);
    const socket = io();

    const state = reactive({
        fileInput: null,
    });
    const newMessage = ref('');

    function connectChat() {
        socket.on("connect", () => {
            console.log(socket.id);
        });

        saveUser();
    };

    function saveUser() {
        socket.emit("saveUser", 'usuarioPinia');
    };

    async function getAllMessages(nameUser) {
        try {
            const data = await getAllMessagesService(nameUser);
            messages.value = data;
            splitUsers(sortNewestMessages(...data));
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
        // Varre todas as mensagens
        for(let c = 0; c < dataMessages.length; c++) {
            let userStored = false; // booleano que diz se o usuário já está armazenado em allUsers
            const senderOrReceiver = (dataMessages[c].sender === 'usuarioPinia') ? dataMessages[c].receiver : dataMessages[c].sender; // Pega o nome do usuário que me enviou ou recebeu a mensagem
            const myMessage = (dataMessages[c].sender === 'usuarioPinia') ? true : false;

            // Verifica se o usuário já está armazenado em allUsers
            for (let i = 0; i < allUsers.value.length; c++) {
                if (allUsers.value[i].user === senderOrReceiver) {
                    userStored = true;
                    if (dataMessages[c].receiver === 'usuarioPinia' && !dataMessages[c].read) {
                        allUsers.value[i].numberMessagesUnread += 1;
                    };
                };
            };
            // Se o usuário não estiver armazenado em allUsers
            if (!userStored) {
                allUsers.value.push({user: senderOrReceiver, numberMessagesUnread: (myMessage) ? 0 : 1, myMessage, lastMessage: dataMessages[c].message, read: dataMessages[c].read});
            };
        }
    };

    function sendMessage() {
        socket.emit("sendMessage", ('usuarioPinia', currentReceiver, newMessage.value));
    }
    // socket.on("receivedMessage", (userSender, msg) => {
    //     if (userSender === currentReceiver.value) {
    //         messagesReceived.value = msg;
    //     } else {
    //         const users = Object.keys(otherMessages);
    //         let userExist = false;
    //         for (let user of users) {
    //             if (user === userSender) {
    //                 otherMessages.value[userSender].lastMessage = msg;
    //                 otherMessages.value[userSender].numberMessages += 1;
    //                 break;
    //             }
    //         }
    //         if (!userExist) {
    //             otherMessages.value[userSender].lastMessage = msg;
    //             otherMessages.value[userSender].numberMessages = 1;
    //         }
    //     }
    // })
    return { messages, currentReceiver, state, newMessage, connectChat, saveUser, getAllMessages, sendMessage };
});