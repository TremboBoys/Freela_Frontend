<script setup></script>
<template>
    <h1 class="title">Cadastro</h1>
                <div class="inputBox">
                    <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder=" ">
                    <label class="name labelInput" for="name">Nome completo</label>
                </div>
                <div class="inputBox">
                    <input type="text" class="form-control" id="user" aria-describedby="nameHelp" placeholder=" ">
                    <label class="user labelInput" for="user">Usuário</label>
                </div>
                <div class="inputBox">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
                    <label class="email labelInput" for="email">Email</label>
                </div>
                <div class="inputBox">
                    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder=" ">
                    <label class="password labelInput" for="password">Senha</label>
                </div>
                <div class="inputBox">
                    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder=" ">
                    <label class="password labelInput" for="password">Confirmar Senha</label>
                </div>
</template>
<style scoped>
@import '../../assets/Sass/SignUp/_signUp-inputs.scss';
</style>