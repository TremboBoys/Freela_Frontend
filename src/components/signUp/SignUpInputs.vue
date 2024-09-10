<script setup>
import InputEmailSignUp from './inputs/InputEmailSignUp.vue';
import InputPasswordSignUp from './inputs/InputPasswordSignUp.vue';
import InputTextSignUp from './inputs/InputTextSignUp.vue';
</script>
<template>
    <h1 class="title">Cadastro</h1>
    <InputTextSignUp name="Nome completo" user="Usuário"/>
    <InputEmailSignUp email="Email" />
    <InputPasswordSignUp password="Senha" confirmPassword="Confirmar senha" />
</template>
<style>
@import '../../assets/Sass/SignUp/_signUp-inputs.scss';
</style>