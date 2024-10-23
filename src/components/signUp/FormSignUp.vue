<script setup>
import { InputTextSignUp, InputEmailSignUp, InputPasswordSignUp, HaveAccountSignUp, SubmitSignUp, IconsSignUp } from '@/components';
import { useSignUpStore } from '@/stores/auth/signUp';

const useSignUp = useSignUpStore();
</script>
<template>
    <div class="signUp">
        <form @submit.prevent="useSignUp.validationEmail(useSignUp.user.email)">
            <h1 class="title">Cadastro</h1>

            <InputTextSignUp :infos="{id: 'name', label: 'Nome'}"/>
            <InputTextSignUp :infos="{id: 'username', label: 'Usuário'}"/>
            <InputEmailSignUp :infos="{id: 'email', label: 'Email'}"/>
            <InputPasswordSignUp :infos="{id: 'password', label: 'Senha'}"/>
            <InputPasswordSignUp :infos="{id: 'confirmPassword', label: 'Confirmar senha'}"/>

            <HaveAccountSignUp />
            <SubmitSignUp />
            <IconsSignUp />
        </form>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/signUp/_signUp-inputs.scss';
</style>