<script setup>
import { ref } from 'vue';
import { useSignUpStore } from '@/stores/auth/signUp';

const useSignUp = useSignUpStore();
const freelancer = ref(null);
const client = ref(null);
const continueRef = ref(null);
const emit = defineEmits(['continueSignUp']);

function chooseType(accountType) {
    if (accountType == 'flc') {
        freelancer.value.classList.toggle("active");
        if (client.value.classList.contains("active")) {
            client.value.classList.toggle("active");
        };
        if (!continueRef.value.classList.contains("activeContinue")) {
            continueRef.value.classList.toggle("activeContinue");
        };
    } else if (accountType == 'clt') {
        client.value.classList.toggle("active");
        if (freelancer.value.classList.contains("active")) {
            freelancer.value.classList.toggle("active");
        };
        if (!continueRef.value.classList.contains("activeContinue")) {
            continueRef.value.classList.toggle("activeContinue");
        };
    } else {
        if (client.value.classList.contains("active")) {
            client.value.classList.remove("active");
        }
        if (freelancer.value.classList.contains("active")) {
            freelancer.value.classList.remove("active");
        }
        if (continueRef.value.classList.contains("activeContinue")) {
            continueRef.value.classList.remove("activeContinue");
        }
    }
};
</script>

<template>
    <h1 class="title" @click="chooseType('none'); useSignUp.user.type_acount = ''">Para finalizar seu cadastro nos conte mais sobre você</h1>
    <h2 class="question" @click="chooseType('none'); useSignUp.user.type_acount = ''">Como você quer utilizar o Tasker?</h2>
    <div class="container-response">
        <div class="container-freelancer" ref="freelancer" @click="chooseType('flc'); useSignUp.user.type_acount = 'freelancer'">
            <img class="freelancer-img" src="@/assets/images/signUp/office.png" alt="">
            <p class="intention">Gostaria de trabalhar</p>
            <p>Quero mostrar meus talentos</p>
        </div>
        <div class="container-client" ref="client" @click="chooseType('clt'); useSignUp.user.type_acount = 'contractor'">
            <img class="client-img" src="@/assets/images/signUp/hired.png" alt="">
            <p class="intention">Gostaria de contratar</p>
            <p>Estou a procura de talentos</p>
        </div>
    </div>
    <div class="container-continue">
        <button ref="continueRef" class="continue" @click="(continueRef.classList.contains('activeContinue')) ? emit('continueSignUp') : ''">Continue <img class="next" src="@/assets/images/signUp/next.png">
        </button>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/signUp/_chooseType.scss';
</style>