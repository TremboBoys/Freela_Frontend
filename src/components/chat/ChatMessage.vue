<script setup>
import HeaderContact from './chatMessage/HeaderContact.vue';
import MessageSentVue from './chatMessage/MessageSent.vue';
import SelectedNone from './chatMessage/SelectedNone.vue';
import MessageReceived from './chatMessage/MessageReceived.vue';
import SendMessage from './chatMessage/SendMessage.vue';
</script>
<template>
  <div class="container">
    <!-- <SelectedNone /> -->
    <HeaderContact />
  </div>
  <div class="message">
    <MessageReceived />
    <MessageSentVue />
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