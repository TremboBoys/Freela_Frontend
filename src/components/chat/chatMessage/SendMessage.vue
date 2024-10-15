<script setup>
import { ref } from 'vue';

const fileInput = ref(null);
const file = ref(null);

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    file.value = event.target.files[0];
};
</script>
<template>
    <div class="container">
        <div class="left">
            <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
            <button @click="triggerFileInput" class="upload-btn"><i class="fa fa-plus"></i></button>
            <p v-if="file">File: {{ file.name }}</p>
        </div>
        <div class="center">
            <input type="text" placeholder="Type a message" class="input-text" />
            <button class="send-btn"><i class="fa fa-paper-plane"></i></button>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/chat/chatMessage/_sendMessage.scss';
</style>
  