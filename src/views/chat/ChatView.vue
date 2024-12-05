<script setup>
import { AsideContacts, ChatMessage } from '@/components';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useChatStore } from '@/stores/chat/chat';
// import { ref, onMounted } from 'vue';

const usePerfil = usePerfilStore();
const useChat = useChatStore();
</script>

<template>
    <div class="container-chat">
        <div class="aside-contacts">
            <AsideContacts v-if="useChat.allUsers.length >= 0 && usePerfil.perfil.user" />
        </div>
        <div class="chat-message">
            <ChatMessage v-if="useChat.messages.length >= 0" />
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/chat/_chatView.scss';
</style>