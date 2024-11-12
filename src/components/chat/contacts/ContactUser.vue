<script setup>
import { ref, onMounted } from "vue";
import { usePerfilStore } from "@/stores/perfil/perfil";
import { useChatStore } from "@/stores/chat/chat";

const props = defineProps({
    username: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});

const usePerfil = usePerfilStore();
const useChat = useChatStore();
const perfil = ref([]);

onMounted(() => {
    const perfilData = usePerfil.filterPerfil(props.username);
    perfil.value = perfilData;
});
</script>

<template>
    <div class="container" :style="(index > 0) ? 'margin-top: 5px' : ''" @click="useChat.currentReceiver = props.username; useChat.openMessagesUser()">
        <div class="contact">
            <div class="contact-avatar">
                <img src="@/assets/images/dashboard/user.png" alt="Avatar">
            </div>
            <div class="contact-info">
                <h3>{{ perfil?.user?.name || 'Nome não encontrado' }}</h3>  <!-- Verificação segura para evitar erros de acesso -->
                <p v-if="useChat.allUsers[index].myMessage === true">Você: {{ useChat.allUsers[index].lastMessage }}</p>
                <p v-else>{{ useChat.allUsers[index].lastMessage }}</p>
            </div>
            <div class="contact-notification">
                <p v-if="!useChat.allUsers[index].myMessage && useChat.allUsers[index].numberMessagesUnread > 0">{{ useChat.allUsers[index].numberMessagesUnread }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/chat/contacts/_contactUser.scss';
</style>