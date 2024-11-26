<script setup>
import '@passageidentity/passage-elements/passage-auth';
import { useAuthStore } from '@/stores/auth/auth';

// const appId = import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID;
const appId = import.meta.env
const useAuth = useAuthStore();
</script>

<template>
    <div class="container-passage">
        <img src="@/assets/images/reject-white.png" class="container-close-pop-up" @click="useAuth.state.showLogin = false">
        <passage-auth :app-id="appId" theme="dark"></passage-auth>
    </div>
</template>

<style scoped>
.container-passage {
    position: absolute;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container-close-pop-up {
    position: relative;
    top: 50px;
    left: 380px;
    color: #000;
    padding: 5px;
    z-index: 1;
    cursor: pointer;
}
</style>