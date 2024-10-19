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
.message {
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  min-height: 68vh;
}
.message::-webkit-scrollbar {
  width: 8px;
}
.message::-webkit-scrollbar-thumb {
  background: #1B75BF;
  border-radius: 10px;
} 
.message::-webkit-scrollbar-thumb:hover {
  background: #16619e;
}
</style>