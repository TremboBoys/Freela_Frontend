<script setup>
import { DefaultFooter, DefaultHeader,SignInPassage, QuickWarnings, PopUpSignUp } from '@/components';
import { useAuthStore } from '@/stores/auth/auth';
import { useSignUpStore } from '@/stores/auth/signUp';
import { useWarningStore } from '@/stores/warning/warning';

const useAuth = useAuthStore();
const useSignUp = useSignUpStore();
const useWarning = useWarningStore();
</script>

<template>
    <main>
        <DefaultHeader />
        <RouterView :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" />
        <SignInPassage v-if="useAuth.state.showLogin === true" />
        <PopUpSignUp v-if="useSignUp.state.registerUser === true" />
        <div class="container-warning-layout" v-if="useWarning.state.isActive">
            <QuickWarnings />
        </div>
        <DefaultFooter />
    </main>
</template>

<style scoped>
.container-warning-layout {
    position: absolute;
    top: 100px;
}
</style>