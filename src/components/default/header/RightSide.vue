<script setup>
import { RouterLink } from 'vue-router';
import { useChatStore } from '@/stores/chat/chat';

const useChat = useChatStore();
</script>

<template>
    <div class="header-rightSide">
        <div class="icons">
            <RouterLink to="/chat"><span class="numberMessages" v-if="useChat.numberMessagesUnread > 0">{{ useChat.numberMessagesUnread <= 9 ? useChat.numberMessagesUnread : '9+' }}</span> <img src="../../../assets/images/chat-icon.png" alt=""></RouterLink>
            <RouterLink to="/subscription-plan"><img src="../../../assets/images/crown-icon.png" alt=""></RouterLink>
            <RouterLink to="/dashboard"><img src="../../../assets/images/usuario-de-perfil.png" alt=""></RouterLink>
        </div>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_rightSide.scss';
</style>