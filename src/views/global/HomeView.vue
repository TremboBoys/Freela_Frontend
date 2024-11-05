<script setup>
import HeaderHome from '@/components/home/HeaderHome.vue';
import MainHome from '@/components/home/MainHome.vue';
import SignInPassage from '@/components/signIn/SignInPassage.vue';
import PopUpSignUp from '@/components/signUp/PopUpSignUp.vue';
import QuickWarnings from '@/components/global/QuickWarnings.vue';
import FreelaClient from '@/components/home/FreelaClient.vue';
import TalentsSkills from '@/components/home/TalentsSkills.vue';
import DefaultFooter from '@/components/default/footer/DefaultFooter.vue';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth/auth';
import { useSignUpStore } from '@/stores/auth/signUp';
import { useWarningStore } from '@/stores/warning/warning';

const useAuth = useAuthStore();
const useSignUp = useSignUpStore();
const useWarning = useWarningStore();

onMounted(async() => {
    useAuth.verifyAuth();
});
</script>

<template>
    <div>
        <HeaderHome/>
        <MainHome :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" />
        <SignInPassage v-if="useAuth.state.showLogin === true" />
        <PopUpSignUp v-if="useSignUp.state.registerUser === true" />
        <div class="container-warning-layout" v-if="useWarning.state.isActive">
            <QuickWarnings />
        </div>
        <FreelaClient :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" />
        <TalentsSkills :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" />
        <DefaultFooter/>
    </div>
</template>

<style scoped>
.container-warning-layout {
    position: absolute;
    top: 100px;
}
</style>