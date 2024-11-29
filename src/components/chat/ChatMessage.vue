<script setup>
import { useChatStore } from "@/stores/chat/chat";
import HeaderContact from './chatMessage/HeaderContact.vue';
import MessagesUser from './chatMessage/MessagesUser.vue';
import SelectedNone from './chatMessage/SelectedNone.vue';
import SendMessage from './chatMessage/SendMessage.vue';
import PopUpImageSelect from "./chatMessage/PopUpImageSelect.vue";

const useChat = useChatStore();
</script>
<template>
  <div class="container">
    <!-- <SelectedNone /> -->
    <HeaderContact v-if="Object.keys(useChat.infoCurrentReceiver).length > 0" :user="('user' in useChat.infoCurrentReceiver) ? useChat.infoCurrentReceiver : {}" />
  </div>
  <div ref="messageContainer" style="" v-if="useChat.messagesCurrentUser.length > 0" class="container-all-messages">
    <PopUpImageSelect v-if="useChat.state.fileInput !== null" />
    <MessagesUser v-if="useChat.messagesCurrentUser.length > 0 && useChat.state.fileInput === null" />
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
.container-all-messages {
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  min-height: 68vh;
}
.container-all-messages::-webkit-scrollbar {
  width: 8px;
}
.container-all-messages::-webkit-scrollbar-thumb {
  background: #1B75BF;
  border-radius: 10px;
} 
.container-all-messages::-webkit-scrollbar-thumb:hover {
  background: #16619e;
}
</style>