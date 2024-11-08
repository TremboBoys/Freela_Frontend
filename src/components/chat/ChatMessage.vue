<script setup>
import { useChatStore } from "@/stores/chat/chat";
import HeaderContact from './chatMessage/HeaderContact.vue';
import MessagesUser from './chatMessage/MessagesUser.vue';
import SelectedNone from './chatMessage/SelectedNone.vue';
import SendMessage from './chatMessage/SendMessage.vue';

const useChat = useChatStore();
</script>
<template>
  <div class="container">
    <!-- <SelectedNone /> -->
    <HeaderContact v-if="Object.keys(useChat.infoCurrentReceiver).length > 0" :user="('user' in useChat.infoCurrentReceiver) ? useChat.infoCurrentReceiver : {}" />
  </div>
  <div class="message">
    <MessagesUser />
  <div></div>
  </div>
  <div class="send">
    <SendMessage/>
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