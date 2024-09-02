<script setup></script>
<template>
    <main>
    <div class="container">
        <header>
            <img src="@/assets/images/workana-logo.png" alt="">
        </header>
        <form>
            <h1>Cadastro</h1>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Confirm Password">
            <p>Já possui uma conta? <router-link to="/login">Entrar</router-link></p>
            <button>Finalizar o cadastro</button>
        </form>
     
     
     
    </div>
    </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
@import '../../assets/Sass/SignUp/_SignUp.scss';
</style>