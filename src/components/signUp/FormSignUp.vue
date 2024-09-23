<script setup>
import { InputTextSignUp, InputEmailSignUp, InputPasswordSignUp, HaveAccountSignUp, SubmitSignUp, IconsSignUp } from '@/components';
</script>
<template>
    <div class="signUp">
        <form>
            <h1 class="title">Cadastro</h1>

            <InputTextSignUp :infos="{id: 'name', label: 'Nome',}"/>
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
<style>
@import '@/assets/Sass/signUp/_signUp-inputs.scss';
</style>