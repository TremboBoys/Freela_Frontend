<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits();

const fileInput = ref(null);
const file = ref(null);
const message = ref('');

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    file.value = event.target.files[0];
};

const sendMessage = () => {
    if (!message.value && !file.value) {
        alert('Please enter a message or select a file');
        return;
    }

    // Emite o evento "send-message" com a nova mensagem
    emit('send-message', {
        text: message.value,
        file: file.value ? file.value.name : null,
    });

    message.value = '';
    file.value = null;
    fileInput.value.value = '';
};
</script>

<template>
    <div class="container">
        <div class="left">
            <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
            <button @click="triggerFileInput" class="upload-btn">
                <i class="fa fa-plus"></i>
            </button>
            <p v-if="file">File: {{ file.name }}</p>
        </div>
        <div class="center">
            <input type="text" placeholder="Type a message" v-model="message" class="input-text" />
            <button @click="sendMessage" class="send-btn">
                <i class="fa fa-paper-plane"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/chat/chatMessage/_sendMessage.scss';
</style>
