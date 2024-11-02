<script setup>
import { ref } from 'vue';
import { useSignUpStore } from '@/stores/auth/signUp';
import { ChooseTypeAccount, StepInputs } from '@/components';

const useSignUp = useSignUpStore();

function nextStep() {
    useSignUp.state.stepChooseTypeAccount = false;
    useSignUp.state.stepInputs = true;
}
</script>

<template>
    <div class="container-pop-up">
        <ChooseTypeAccount v-if="useSignUp.state.stepChooseTypeAccount" @continue-sign-up="nextStep()" />
        <StepInputs v-else-if="useSignUp.state.stepInputs"/>
    </div>
</template>

<style scoped>
.container-pop-up {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 1000px;
    height: 640px;
    padding: 20px;
    background-color: #FDFDFD;
    border: 1px solid #000;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>