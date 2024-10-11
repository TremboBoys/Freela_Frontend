<script setup>
import AsideContacts from '@/components/chat/AsideContacts.vue'
import ChatMessage from '@/components/chat/ChatMessage.vue'
</script>

<template>
    <div class="container-chat">
        <div class="aside-contacts">
            <AsideContacts />
        </div>
        <div class="chat-message">
            <ChatMessage />
        </div>
    </div>
</template>

<style scoped>
.container-chat {
    display: flex;
    height: 100vh;
}
.aside-contacts {
    display: flex;
    flex-direction: column;
    width: 25vw;
    overflow-y: auto;
    overflow-x: hidden;}

.chat-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 65vw;
}
</style>