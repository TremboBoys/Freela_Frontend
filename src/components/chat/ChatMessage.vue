<script setup>
import HeaderContact from './chatMessage/HeaderContact.vue'
import MessageSentVue from './chatMessage/MessageSent.vue'
import SelectedNone from './chatMessage/SelectedNone.vue'
import MessageReceived from './chatMessage/MessageReceived.vue'
import SendMessage from './chatMessage/SendMessage.vue'
</script>
<template>
  <div class="container">
    <!-- <SelectedNone /> -->
    <HeaderContact />
  </div>
  <div class="message">
    <MessageSentVue />
    <MessageReceived />
  </div>
  <div class="send">
    <SendMessage />
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