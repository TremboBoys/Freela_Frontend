<script setup>
import SignUpIcons from './SignUpIcons.vue';
import SignUpButton from './SignUpButton.vue';
import SignUpLogin from './SignUpLogin.vue';
</script>
<template>
    <main>
        <div class="containerForm">
            <header>
                <RouterLink to="/">
                    <img src="@/assets/images/workana-logo.png" alt="">
                </RouterLink>
            </header>
            <div class="signUp">

                <form>
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
                <SignUpLogin />
                <SignUpButton />
            </form>
            <SignUpIcons />
            </div>
        </div>
    </main>
</template>
<style scoped>
@import '../../assets/Sass/SignUp/_SignUp.scss';
@import '../../assets/tailwind.css';
</style>