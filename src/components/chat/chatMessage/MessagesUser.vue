<script setup>
import { useChatStore } from '@/stores/chat/chat';
import { usePerfilStore } from '@/stores/perfil/perfil';

const useChat = useChatStore();
const usePerfil = usePerfilStore();

function shouldShowAvatar(index) {
    if (index > 0 && useChat.messagesCurrentUser[index].sender !== usePerfil.perfil.user.username) {
        return (useChat.messagesCurrentUser[index].sender === useChat.messagesCurrentUser[index - 1].sender) ? false : true;
    } else if (index == 0 && useChat.messagesCurrentUser[index].sender !== usePerfil.perfil.user.username) {
        return true;
    }
}

function shouldShowDetailMessage(message, index) {
    console.log(message, index);
    if (index == 0) {
        return (message.sender === usePerfil.perfil.user.username) ? 'border-radius: 10px 0 10px 10px' : 'border-radius: 0 10px 10px 10px;';
    } else {
        return (message.sender === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.currentReceiver[index - 1].sender) ? 'border-radius: 10px 0 10px 10px;' : (message.sender !== usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.currentReceiver[index - 1].sender) ? 'border-radius: 0 10px 10px 10px;' : 'border-radius: 10px 10px 10px 10px;';
        // return (message.sender === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.currentReceiver[index - 1].sender) ? 'border-radius: 10px 0 10px 10px;' : (message.receiver === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].receiver !== useChat.currentReceiver[index - 1].receiver) ? 'border-radius: 0 10px 10px 10px;' : 'border-radius: 10px 10px 10px 10px;' 
    }
}
</script>

<template>
      <div v-for="(message, index) in useChat.messagesCurrentUser" :key="index" :class="(message.sender === usePerfil.perfil.user.username) ? 'container-sent' : 'container-received'">
        <div :class="(message.sender === usePerfil.perfil.user.username) ? 'messageSent' : 'messageReceived'">
            <div class="message">
                <div v-if="shouldShowAvatar(index)" class="avatar">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                </div>
                <div class="messages" :style="(shouldShowAvatar(index) === true) ? '' : 'padding-left: 50px;'">
                    <div class="message-text" :style="shouldShowDetailMessage(message, index)">
                        <p class="text">{{ message.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
@import '@/assets/Sass/chat/chatMessage/_messages.scss';
</style>