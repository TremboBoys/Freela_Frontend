<script setup>
import { ref } from 'vue';
import { useSignUpStore } from '@/stores/auth/signUp';
import { useWarningStore } from '@/stores/warning/warning';
import { ConfEmailTitles, CodeVerification, SendButton, QuickWarnings } from '@/components'

const useSignUp = useSignUpStore();
const useWarning = useWarningStore();

function submitCode(code) {
    useSignUp.user.code = code;
    useSignUp.createUser(useSignUp.user);
};
</script>

<template>
    <div class="confArea">
        <div class="container-warning-position">
            <QuickWarnings v-if="useWarning.state.isActive == true" />
        </div>
        <ConfEmailTitles/>
        <form>
            <CodeVerification @submit-code="submitCode"/>
            <SendButton title="Enviar" />
        </form>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_confirmationArea.scss';
</style>