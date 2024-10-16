<script setup>
import { ref } from 'vue';
import HeaderContact from './chatMessage/HeaderContact.vue'
import MessageSentVue from './chatMessage/MessageSent.vue'
import SelectedNone from './chatMessage/SelectedNone.vue'
import MessageReceived from './chatMessage/MessageReceived.vue'
import SendMessage from './chatMessage/SendMessage.vue'
const messages = ref([]); // Armazena todas as mensagens enviadas

const handleSendMessage = (newMessage) => {
  messages.value.push(newMessage); // Adiciona a nova mensagem no array
};
</script>
<template>
  <div class="container">
    <!-- <SelectedNone /> -->
    <HeaderContact />
  </div>
  <div class="message">
    <MessageSentVue :messages="messages"/>
    <MessageReceived />
  </div>
  <div class="send">
    <SendMessage @send-message="handleSendMessage"/>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex: 1;
}
.container .message {
  display: flex;
  flex-direction: column !important;
}
</style>