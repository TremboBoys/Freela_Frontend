<script setup>
import { DefaultFooter, DefaultHeader,SignInPassage } from '@/components';
import { useAuthStore } from '@/stores/auth/auth';

const useAuth = useAuthStore();
</script>

<template>
    <main>
        <DefaultHeader />
        <RouterView :style="(useAuth.state.showLogin === true) ? useAuth.state.popUpEffect : ''" />
        <SignInPassage v-if="useAuth.state.showLogin === true" />
        <DefaultFooter />
    </main>
</template>