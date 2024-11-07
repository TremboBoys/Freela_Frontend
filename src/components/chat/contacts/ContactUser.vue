<script setup>
import { ref, onMounted } from "vue";
import { usePerfilStore } from "@/stores/perfil/perfil"

onMounted(() => {
    const perfilData = usePerfil.filterPerfil(props.username);
    console.log(perfilData);
    perfil.value = perfilData;
});

const props = defineProps({
    username: {
        type: String,
        required: true
    },
    myMessage: {
        type: Boolean,
        required: true
    },
    lastMessage: {
        type: String,
        required: true
    },
    numberMessagesUnread: {
        type: Number,
        required: true
    }
});

const usePerfil = usePerfilStore();

const perfil = ref([]);

</script>

<template>
    <div class="container">
        <div class="contact">
            <div class="contact-avatar">
                <img src="@/assets/images/dashboard/user.png" alt="">
            </div>
            <div class="contact-info">
                <h3>{{ perfil.user.name }}</h3>
                <p v-if="props.myMessage === true">Você: {{ props.lastMessage }}</p>
                <p v-else>New message</p>
            </div>
            <div class="contact-notification">
                <p v-if="props.myMessage === false && props.numberMessagesUnread > 0">{{ props.numberMessagesUnread }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/chat/contacts/_contactUser.scss';
</style>