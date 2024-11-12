<script setup>
import { ref, onMounted, watch } from 'vue';
import { useChatStore } from '@/stores/chat/chat';
import { usePerfilStore } from '@/stores/perfil/perfil';
// import { useIntersectionObserver } from '@vueuse/core';

const useChat = useChatStore();
const usePerfil = usePerfilStore();
const messageRefs = ref([]);

function shouldShowAvatar(index) {
    if (index > 0 && useChat.messagesCurrentUser[index].sender !== usePerfil.perfil.user.username) {
        return (useChat.messagesCurrentUser[index].sender === useChat.messagesCurrentUser[index - 1].sender) ? false : true;
    } else if (index == 0 && useChat.messagesCurrentUser[index].sender !== usePerfil.perfil.user.username) {
        return true;
    }
};

function shouldShowDetailMessage(message, index) {
    if (index == 0) {
        return (message.sender === usePerfil.perfil.user.username) ? 'border-radius: 10px 0 10px 10px' : 'border-radius: 0 10px 10px 10px;';
    } else {
        return (message.sender === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.messagesCurrentUser[index - 1].sender) ? 'border-radius: 10px 0 10px 10px;' : (message.sender !== usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.messagesCurrentUser[index - 1].sender) ? 'border-radius: 0 10px 10px 10px;' : 'border-radius: 10px 10px 10px 10px;';
        // return (message.sender === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.currentReceiver[index - 1].sender) ? 'border-radius: 10px 0 10px 10px;' : (message.receiver === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].receiver !== useChat.currentReceiver[index - 1].receiver) ? 'border-radius: 0 10px 10px 10px;' : 'border-radius: 10px 10px 10px 10px;' 
    }
};

function verifyReadMessage(entries, observer) {
    entries.forEach(entry => {
        const index = entry.target.getAttribute('id');
        if (entry.isIntersecting && !useChat.messagesCurrentUser[index].read) {
            useChat.makeMessageRead(useChat.messagesCurrentUser[index]._id);
        }
    })
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
const observer = new IntersectionObserver(verifyReadMessage, options);

function observerMessages() {
    Array.from(document.getElementsByClassName('container-received')).forEach((el) => {
        console.log(el);
        messageRefs.value = el.getAttribute('id');
        observer.observe(el);
    })
}

watch(() => useChat.messages, () => {
        const lastMessage = useChat.messages.at(-1);
        console.log('Received message!', lastMessage);

        if (lastMessage && lastMessage.sender === useChat.currentReceiver) {
            const receivedMessages = document.querySelectorAll('.messageReceived');
            const lastReceivedMessage = receivedMessages.length ? receivedMessages[receivedMessages.length - 1] : null;

            if (lastReceivedMessage) {
                messageRefs.value = lastReceivedMessage.getAttribute('id');
                console.log(lastReceivedMessage.getAttribute('id'));
                observer.observe(lastReceivedMessage);
            }
        }
    },
    { deep: true }
);

onMounted(() => {
    observerMessages()
})
</script>

<template>
      <div v-for="(message, index) in useChat.messagesCurrentUser" :key="index" :class="(message.sender === usePerfil.perfil.user.username) ? 'container-sent' : 'container-received'" :id="index">
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