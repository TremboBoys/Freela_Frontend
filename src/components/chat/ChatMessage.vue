<script setup>
import HeaderContact from './chatMessage/HeaderContact.vue'
import MessageSentVue from './chatMessage/MessageSent.vue'
import SelectedNone from './chatMessage/SelectedNone.vue'
</script>
<template>
  <div class="container">
    <!-- <SelectedNone /> -->
    <HeaderContact />
  </div>
  <div class="message">
    <MessageSentVue />
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