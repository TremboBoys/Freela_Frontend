<script setup>
import AsideContacts from '@/components/chat/AsideContacts.vue'
import ChatMessage from '@/components/chat/ChatMessage.vue'
</script>

<template>
    <div class="aside-contacts">
        <AsideContacts />
    </div>
    <div class="chat-message">
        <ChatMessage />
    </div>
</template>

<style scoped>

.aside-contacts {
    display: flex;
    flex-direction: column;
}
.chat-message {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 0 20px;
}
</style>