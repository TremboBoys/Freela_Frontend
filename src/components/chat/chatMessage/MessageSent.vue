<script setup>
import { defineProps } from 'vue';

// Recebe as mensagens enviadas como props
defineProps({
  messages: Array
});
</script>

<template>
  <div class="container-sent">
    <div class="messageSent" v-for="(message, index) in messages" :key="index">
      <div class="message">
        <div class="avatar">
          <img src="@/assets/images/dashboard/luiz.jpg" alt="">
        </div>
        <div class="messages">
          <div class="message-text" v-if="message.text">
            <p class="text">{{ message.text }}</p>
          </div>
          <div class="message-text" v-if="message.file">
            <p class="text">File: {{ message.file }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/Sass/chat/chatMessage/_messageSent.scss';
</style>
