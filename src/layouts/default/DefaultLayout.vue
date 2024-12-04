<script setup>
import { DefaultFooter, DefaultHeader,SignInPassage, LoadSpinner, QuickWarnings, PopUpSignUp } from '@/components';
import { useChatStore } from '@/stores/chat/chat';
import { useAuthStore } from '@/stores/auth/auth';
import { useSignUpStore } from '@/stores/auth/signUp';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useWarningStore } from '@/stores/warning/warning';
import { onMounted } from 'vue';

const useChat = useChatStore();
const useAuth = useAuthStore();
const useSignUp = useSignUpStore();
const useWarning = useWarningStore();
onMounted(() => {
    window.scrollTo(0, 0);
})
const usePerfil = usePerfilStore();
onMounted(async() => {
  await useChat.initApp();
});
</script>

<template>
    <main>
        <DefaultHeader v-if="usePerfil.perfil.user !== ''" />
        <RouterView v-if="usePerfil.perfil.user !== ''" />
        <SignInPassage v-if="useAuth.state.showLogin === true" />
        <LoadSpinner v-else-if="useWarning.state.isLoading === true" />
        <PopUpSignUp v-if="useSignUp.state.registerUser === true" />
        <div class="container-warning-layout" v-if="useWarning.state.isActive">
            <QuickWarnings />
        </div>
        <DefaultFooter v-if="usePerfil.perfil.user !== ''" />
    </main>
</template>

<style scoped>
.container-warning-layout {
    position: absolute;
    top: 100px;
}
</style>