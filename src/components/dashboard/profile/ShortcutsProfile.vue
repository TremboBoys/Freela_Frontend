<script setup>
import { useChatStore } from "@/stores/chat/chat";

const useChat = useChatStore();
</script>

<template>
  <div class="container-shortcuts">
    <div class="shortcut">
        <RouterLink to="/chat" class="chat">
            <img src="@/assets/images/dashboard/chat.png" alt="">
        </RouterLink>
        <div v-if="useChat.numberMessagesUnread > 0" class="warningMessages">
            <span>{{ (useChat.numberMessagesUnread <= 9) ? useChat.numberMessagesUnread : '9+' }}</span>
        </div>
    </div>
    <div class="shortcut">
        <RouterLink to="" class="contracts">
            <img src="@/assets/images/dashboard/contract.png" alt="">
        </RouterLink>
        <div v-if="useChat.numberMessagesUnread > 0" class="warningMessages">
            <span>{{ (useChat.numberMessagesUnread <= 9) ? useChat.numberMessagesUnread : '9+' }}</span>
        </div>
    </div>
    <div class="shortcut">
        <RouterLink to="/finances" class="finances">
            <img src="@/assets/images/dashboard/finances.png" alt="">
        </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/Sass/dashboard/profile/_shortcuts.scss';
</style>