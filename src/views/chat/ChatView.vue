<script setup>
import { AsideContacts, ChatMessage } from '@/components';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useChatStore } from '@/stores/chat/chat';
import { onMounted } from 'vue';

const usePerfil = usePerfilStore();
const useChat = useChatStore();

onMounted(async() => {
  await useChat.initApp();
});
</script>

<template>
    <div class="container-chat">
        <div class="aside-contacts">
            <AsideContacts v-if="useChat.allUsers.length >= 0 && usePerfil.perfil.user !== ''" />
        </div>
        <div class="chat-message">
            <ChatMessage v-if="useChat.messages.length >= 0" />
        </div>
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #1B75BF;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #1360a0;
}
.container-chat {
    display: flex;
    height: 85vh;
}
.aside-contacts {
    display: flex;
    flex-direction: column;
    width: 22vw;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.chat-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 78vw;
}
</style>