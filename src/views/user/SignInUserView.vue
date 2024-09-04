<script setup>
import SignInButton from '../../components/SignIn/SignInButton.vue';
import SignInIcons from '../../components/SignIn/SignInIcons.vue';

</script>

<template>
  <div class="signIn-container">
    <div class="left-side">
      <img src="../../assets/images/workana-white-logo.png" alt="" />
      <div class="login-container">
        <h1>Login</h1>
        <p>Seja bem vindo novamente!</p>

        <div class="inputs-container">
          <div class="form-group inputBox">
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder=" "
            />
            <label class="email labelInput" for="email">Email</label>
          </div>
          <div class="form-group inputBox">
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder=" "
            />
            <label class="email labelInput" for="email">Senha</label>
          </div>
          <p>Não possui uma conta? <RouterLink id="signIn-rl" to="/">Cadastre-se</RouterLink></p>
          <SignInButton />
          <SignInIcons/>
        </div>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/signIn/_signIn.scss';
</style>
