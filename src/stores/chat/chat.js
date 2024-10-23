import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useChatStore = defineStore('chat', () => {
    const messages = ref([]);
    const state = reactive({
        fileInput: null,
    });
    const newMessage = reactive({
        message: '',
        file: null
    });

    function sendMessage() {
        if (!newMessage.message && !newMessage.file) {
            alert('Please enter a message or select a file');
            return;
        }
    
        messages.value.push({
            text: newMessage.message,
            file: newMessage.file ? newMessage.file : null,
        });
    
        newMessage.message = '';
        newMessage.file = null;
    }

    return { messages, state, newMessage, sendMessage };
});