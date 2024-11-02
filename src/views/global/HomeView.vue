<script setup>
import HeaderHome from '@/components/home/HeaderHome.vue';
import MainHome from '@/components/home/MainHome.vue';
import SignInPassage from '@/components/signIn/SignInPassage.vue';
import FreelaClient from '@/components/home/FreelaClient.vue';
import TalentsSkills from '@/components/home/TalentsSkills.vue';
import DefaultFooter from '@/components/default/footer/DefaultFooter.vue';
import { useAuthStore } from '@/stores/auth/auth';

const useAuth = useAuthStore();
</script>

<template>
    <div>
        <HeaderHome/>
        <MainHome :style="(useAuth.state.showLogin === true) ? useAuth.state.popUpEffect : ''" />
        <SignInPassage v-if="useAuth.state.showLogin === true" />
        <FreelaClient :style="(useAuth.state.showLogin === true) ? useAuth.state.popUpEffect : ''" />
        <TalentsSkills :style="(useAuth.state.showLogin === true) ? useAuth.state.popUpEffect : ''" />
        <DefaultFooter/>
    </div>
</template>

<style scoped>
</style>