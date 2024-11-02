<script setup>
import { ref, watch } from "vue";
import { useSignUpStore } from '@/stores/auth/signUp';

const useSignUp = useSignUpStore();
const submitRef = ref(null);

watch(() => [useSignUp.user.name, useSignUp.user.username], () => {
    console.log('Chamando função')
    if (useSignUp.user.name !== '' && useSignUp.user.username !== '') {
        submitRef.value.classList.add("activeSubmit");
    } else {
        if(submitRef.value.classList.contains("activeSubmit")) {
            submitRef.value.classList.remove("activeSubmit");
        };
    };
});
</script>

<template>
    <h1 class="title-inputs">Por fim, nos informe seu nome e usuário que desejar</h1>

    <div class="container-sticker">
        <img src="@/assets/images/signUp/inputs.png" alt="">
    </div>

    <form @submit.prevent="useSignUp.createUser(useSignUp.user)">
        <div class="form-group inputBox">
            <label for="nome">Nome</label>
            <input type="nome" class="form-control" id="nome" v-model="useSignUp.user.name" aria-describedby="nomeHelp" placeholder="Como você quer ser chamado?">
        </div>
        <div class="form-group inputBox">
            <label for="nome">Usuário</label>
            <input type="nome" class="form-control" v-model="useSignUp.user.username" id="nome" aria-describedby="nomeHelp" placeholder="@user1234">
        </div>
        <div class="container-submit">
            <button ref="submitRef" class="submit" type="submit">Finalizar Cadastro</button>
        </div>
    </form>
</template>


<style scoped>
@import '@/assets/Sass/signUp/_inputs.scss';
</style>