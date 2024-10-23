<script setup>
import { ref } from 'vue';
import { useSignUpStore } from '@/stores/auth/signUp';
import ConfEmailTitles from './ConfEmailTitles.vue';
import CodeVerification from './CodeVerification.vue';
import SendButton from '../password/SendButton.vue';

const useSignUp = useSignUpStore();

function submitCode(code) {
    useSignUp.createUser(useSignUp.user);
};
</script>

<template>
    <div class="confArea">
        <ConfEmailTitles/>
        <form>
            <CodeVerification @submit-code="submitCode"/>
            <SendButton/>
        </form>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_confirmationArea.scss';
</style>