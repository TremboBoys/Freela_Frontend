<script setup>
import { useChatStore } from "@/stores/chat/chat";
import { useSearchChatStore } from "@/stores/chat/searchChat";

const useSearchChat = useSearchChatStore();
const useChat = useChatStore();
</script>

<template>
    <div v-for="(perfil, index) in useSearchChat.foundContacts" :key="index" class="container-profile-found" @click="useChat.currentReceiver = perfil.user.username; useChat.openMessagesUser(); useSearchChat.inputSearch = ''">
        <div class="container-photo-found">
            <img class="photo" src="@/assets/images/dashboard/user.png" alt="">
        </div>
        <div class="container-info-profile">
            <div class="container-name">{{ perfil.user.name }}</div>
            <div class="container-username">@{{ perfil.user.username }}</div>
        </div>
    </div>
    <div class="container-not-found" v-if="useSearchChat.foundContacts.length == 0">
        <p>Nenhum usuário encontrado</p>
        <img class="imgNotFound" src="@/assets/images/no-results.png" alt="">
    </div>
</template>


<style scoped>
@import '@/assets/Sass/chat/contacts/_foundContacts.scss';
</style>