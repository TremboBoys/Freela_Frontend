<script setup>
import '@passageidentity/passage-elements/passage-auth';
import { useAuthStore } from '@/stores/auth/auth';

const appId = import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID;
const useAuth = useAuthStore();
</script>

<template>
    <div class="container-passage">
        <span class="container-close-pop-up" @click="useAuth.state.showLogin = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path   d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </span>
        <passage-auth :app-id="appId"></passage-auth>
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
    top: 35px;
    left: 385px;
    color: #000;
    padding: 5px;
    z-index: 1;
    cursor: pointer;
}
</style>