<script setup>
import { useChatStore } from '@/stores/chat/chat';

const useChat = useChatStore();

// Função para determinar se o avatar deve ser exibido
function shouldShowAvatar(index) {
  // Verifica se é a primeira mensagem ou se o texto é diferente da mensagem anterior
  return index === 0 || (useChat.messages.length > 0) == false;
}
</script>

<template>
    <div class="container-received">
        <div class="messageReceived" v-for="(message, index) in useChat.messagesReceivedCurrentUser" :key="index">
            <div class="message">
                <div class="avatar">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                </div>
                <div class="messages">
                    <div class="message-text">
                        <p class="text">{{ message.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/chat/chatMessage/_messageReceived.scss';
</style>
