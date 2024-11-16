<script setup>
import { ref } from 'vue';
import { useChatStore } from '@/stores/chat/chat';

const useChat = useChatStore();
const fileInput = ref(null);

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    useChat.state.fileInput = event.target.files[0];
};
</script>

<template>
    <div class="container">
        <div class="left">
            <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
            <button @click="triggerFileInput" class="upload-btn">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <div class="center">
            <input type="text" placeholder="Type a message" v-model="useChat.newMessage" @keydown.enter="(useChat.state.fileInput === null) ? useChat.sendMessage() : useChat.uploadImage()" class="input-text" />
            <button @click="(useChat.state.fileInput === null) ? useChat.sendMessage() : useChat.uploadImage()" class="send-btn">
                <i class="fa fa-paper-plane"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/chat/chatMessage/_sendMessage.scss';
</style>
