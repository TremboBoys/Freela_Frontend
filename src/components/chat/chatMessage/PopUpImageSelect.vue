<script setup>
import { onMounted } from 'vue';
import { useChatStore } from '@/stores/chat/chat';

const useChat = useChatStore();

function createUrlImage() {
    const url = URL.createObjectURL(useChat.state.fileInput);
    return url;
};

onMounted(() => {
    console.log(useChat.state.fileInput);
    createUrlImage();
})
</script>

<template>
  <div class="container-pop-up">
    <img src="@/assets/images/chat/close.png" @click="useChat.state.fileInput = null" class="close" alt="">
    <div class="container-image-selected">
        <img :src="createUrlImage()" class="selected-image" alt="">
    </div>
  </div>
</template>

<style scoped>
.close {
    width: 32px;
    cursor: pointer;
}
.container-pop-up {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #eeecec;
    padding: 10px;
}

.container-image-selected {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>