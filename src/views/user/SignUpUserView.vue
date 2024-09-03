<script setup></script>
<template>
    <main>
        <div class="container">
            <header>
                <img src="@/assets/images/workana-logo.png" alt="">
            </header>
            <form>
                <h1>Cadastro</h1>
                <div class="inputBox">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
                    <label class="email labelInput" for="email">Email</label>
                </div>
                <div class="inputBox">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
                    <label class="email labelInput" for="email">Nome de usuário</label>
                </div>
                <div class="inputBox">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
                    <label class="email labelInput" for="email">Senha</label>
                </div>
                <div class="inputBox">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
                    <label class="email labelInput" for="email">Confirmar Senha</label>
                </div>
                <p>Já possui uma conta? <router-link class="router" to="/login">Entrar</router-link></p>
                <button>Finalizar o cadastro</button>
            </form>



        </div>
    </main>
</template>
<style scoped>

@import '../../assets/Sass/SignUp/_SignUp.scss';
</style>