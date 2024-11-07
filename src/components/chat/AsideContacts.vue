<script setup>
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useChatStore } from '@/stores/chat/chat';
import { ButtonSearch, ContactUser } from '@/components/';

const useChat = useChatStore();
const usePerfil = usePerfilStore();
</script>
<template>
    <div class="container" v-if="usePerfil.perfis.length > 0 && usePerfil.perfil && usePerfil.perfil.user">
        <ButtonSearch />
        <ContactUser 
            v-for="(user, index) in useChat.allUsers" 
            :key="index"
            :index="index" 
            :username="user.user" 
            :my-message="user.myMessage" 
            :last-message="user.lastMessage" 
            :number-messages-unread="user.numberMessagesUnread" 
        />
    </div>
</template>
<style scoped>
@import '@/assets/Sass/chat/contacts/_asideContacts.scss';
</style>