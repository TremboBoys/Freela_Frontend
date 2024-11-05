import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { io } from "socket.io-client";

export const useChatStore = defineStore('chat', () => {
    const messages = ref([]);
    const currentReceiver = ref(null);
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

    function

    function saveUser() {
        socket.emit("saveUser", 'usuarioPinia');
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
    return { messages, currentReceiver, state, newMessage, connectChat, saveUser, sendMessage };
});