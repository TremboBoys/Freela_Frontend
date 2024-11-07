<script setup>
import { useSignUpStore } from '@/stores/auth/signUp';
import { ChooseTypeAccount, StepInputs, ChooseArea } from '@/components';

const useSignUp = useSignUpStore();

function nextStep(current, next) {
    useSignUp.state[current] = false;
    useSignUp.state[next] = true;
}
</script>

<template>
    <div class="container-pop-up">
        <ChooseTypeAccount v-if="useSignUp.state.stepChooseTypeAccount" @continue-sign-up="nextStep" />
        <ChooseArea v-else-if="useSignUp.state.stepChooseArea" @continue-sign-up="nextStep" />
        <StepInputs v-else-if="useSignUp.state.stepInputs"/>
    </div>
</template>

<style scoped>
.container-pop-up {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 1000px;
    height: 680px;
    padding: 20px;
    background-color: #FDFDFD;
    border: 1px solid #000;
    border-radius: 10px;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>