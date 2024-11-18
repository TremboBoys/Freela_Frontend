<script setup>
import { ref, onMounted, watch } from 'vue';
import { useChatStore } from '@/stores/chat/chat';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useWarningStore } from '@/stores/warning/warning';
// import { useIntersectionObserver } from '@vueuse/core';

const useChat = useChatStore();
const usePerfil = usePerfilStore();
const messageRefs = ref([]);

function openPageLastMessage() {
    const containerMessage = document.querySelector('.container-all-messages');
    if (containerMessage) {
        containerMessage.scrollTop = containerMessage.scrollHeight;
        // smoothScrollToBottom(containerMessage);
    } else {
        console.error('Containers is not exist')
    };
};

function showArrowMessage(index) {
    const messageContainer = document.getElementsByClassName("optionsMessage");
    for(let c = 0; c < messageContainer.length; c++) {
        if (messageContainer[c].getAttribute('id') == index) {
            messageContainer[c].classList.add("showOptions")
        }
    }
}

function hiddenArrowMessage(index) {
    const messageContainer = document.getElementsByClassName("optionsMessage");
    for(let c = 0; c < messageContainer.length; c++) {
        if (messageContainer[c].getAttribute('id') == index) {
            messageContainer[c].classList.remove("showOptions")
        }
    }
}

function showOptionsMessage(index) {
    const messageContainer = document.getElementsByClassName("container-options");
    messageContainer[index].classList.toggle("showContainerOptions");
}

function shouldShowAvatar(index) {
    if (index > 0 && useChat.messagesCurrentUser[index].sender !== usePerfil.perfil.user.username) {
        return (useChat.messagesCurrentUser[index].sender === useChat.messagesCurrentUser[index - 1].sender) ? false : true;
    } else if (index == 0 && useChat.messagesCurrentUser[index].sender !== usePerfil.perfil.user.username) {
        return true;
    };
};

function shouldShowDetailMessage(message, index) {
    if (index == 0) {
        return (message.sender === usePerfil.perfil.user.username) ? 'border-radius: 10px 0 10px 10px' : 'border-radius: 0 10px 10px 10px;';
    } else {
        return (message.sender === usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.messagesCurrentUser[index - 1].sender) ? 'border-radius: 10px 0 10px 10px;' : (message.sender !== usePerfil.perfil.user.username && useChat.messagesCurrentUser[index].sender !== useChat.messagesCurrentUser[index - 1].sender) ? 'border-radius: 0 10px 10px 10px;' : 'border-radius: 10px 10px 10px 10px;';
    };
};

function verifyReadMessage(entries, observer) {
    entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('id'));
        console.log(entry.target, index);
        if ((entry.isIntersecting || entry.intersectionRatio > 0) && !useChat.messagesCurrentUser[index].read) {
            if ("infoImage" in useChat.messagesCurrentUser[index]) {
                useChat.makeMessageRead(useChat.messagesCurrentUser[index]._id, 'image');
            } else {
                useChat.makeMessageRead(useChat.messagesCurrentUser[index]._id, 'message');
            }
            console.log('Elemento atualizado!');
            observer.unobserve(entry.target);
        } else if (useChat.messagesCurrentUser[index].read) {
            observer.unobserve(entry.target);
        };
    });
};

let containerMessage = document.querySelector('.message');

const options = {
    root: containerMessage,
    rootMargin: '0px 0px 0px 50px',
    threshold: 0.01
};
const observer = new IntersectionObserver(verifyReadMessage, options);

function observerMessages() {
    Array.from(document.getElementsByClassName('container-received')).forEach((el) => {
        messageRefs.value = el.getAttribute('id');
        observer.observe(el);
    });
};

watch([() => useChat.messages, () => useChat.currentReceiver], async([newMessage, newCurrentReceiver], [oldMessage, oldCurrentReceiver]) => {
        const lastMessage = useChat.messages.at(-1);

        if (newCurrentReceiver !== oldCurrentReceiver) {
            setTimeout(() => {
                observerMessages();
                openPageLastMessage();
            }, 1);
        } else if (lastMessage && lastMessage.sender === useChat.currentReceiver) {
            const interval = setInterval(() => {
                const receivedMessages = document.querySelectorAll('.container-received');
                const lastReceivedMessage = receivedMessages[receivedMessages.length - 1];
                const indexReceived = lastReceivedMessage.getAttribute('id');

                if (indexReceived == useChat.messagesCurrentUser.length - 1) {
                    console.log('Elemento observado!');
                    messageRefs.value = lastReceivedMessage.getAttribute('id');
                    observer.observe(lastReceivedMessage);
                    clearInterval(interval);
                }
            }, 100);
        }
    },
    { deep: true }
);

onMounted(() => {
    observerMessages();
    useWarningStore().state.isLoading = true;
    openPageLastMessage();
    useWarningStore().state.isLoading = false;
})
</script>

<template>
    <div v-for="(message, index) in useChat.messagesCurrentUser" :key="index" :class="(message.sender === usePerfil.perfil.user.username) ? 'container-sent' : 'container-received'" :id="index">
        <div :class="(message.sender === usePerfil.perfil.user.username) ? 'messageSent' : 'messageReceived'">
            <div class="message">
                <div v-if="shouldShowAvatar(index)" class="avatar">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                </div>
                <div class="messages" @mouseenter="(message.sender === usePerfil.perfil.user.username) ? showArrowMessage(index) : ''" @mouseleave="(message.sender === usePerfil.perfil.user.username) ? hiddenArrowMessage(index) : ''" :style="(shouldShowAvatar(index) === true) ? '' : 'padding-left: 50px;'">
                    <div class="container-icon-options">
                        <div class="container-options" @click="('infoImage' in message) ? useChat.deleteMessageNotification(message._id, 'image', index) : useChat.deleteMessageNotification(message._id, 'message', index); showOptionsMessage(index)" :id="index"> <img src="@/assets/images/chat/trash.png" class="trash-icon" alt=""> Deletar</div>
                        
                        <img v-if="message.sender === usePerfil.perfil.user.username" src="@/assets/images/chat/arrow-down.png" class="optionsMessage" :id="index" alt="" @click="showOptionsMessage(index)">
                    </div>
                    <div v-if="'infoImage' in message" class="message-text paddingImage" :style="shouldShowDetailMessage(message, index)">
                        <img :src="message.infoImage.url" alt="">
                        <div class="container-otherInfos positionImage">
                            <img src="@/assets/images/chat/unread.png" v-if="!message.read" class="unread-icon" alt="">
                            <img src="@/assets/images/chat/read.png" v-else class="read-icon" alt="">
                            <span>{{ useChat.formatDateAndHour(message.dateTime) }}</span>
                        </div>
                    </div>
                    <div v-else class="message-text" :style="shouldShowDetailMessage(message, index)">
                        <p class="text">{{ message.message }}</p>
                        <div class="container-otherInfos">
                            <img src="@/assets/images/chat/unread.png" v-if="!message.read" class="unread-icon" alt="">
                            <img src="@/assets/images/chat/read.png" v-else class="read-icon" alt="">
                            <span>{{ useChat.formatDateAndHour(message.dateTime) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
@import '@/assets/Sass/chat/chatMessage/_messages.scss';
</style>