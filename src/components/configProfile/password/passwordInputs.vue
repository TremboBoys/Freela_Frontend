<script setup>
import SendButton from './SendButton.vue';
</script>

<template>
  <div class="passwordInputs">
    <h1>Configuração de Senha</h1>
    <div class="inputs">
      <div class="form-group inputBox">
        <input
          type="password"
          disabled
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
          value="teste"
        />
        <label class="email labelInput" for="email">Sua senha</label>
      </div>
      <div class="form-group inputBox">
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
        />
        <label class="email labelInput" for="email">Sua nova senha</label>
      </div>
      <div class="form-group inputBox">
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
        />
        <label class="email labelInput" for="email">Confirmar senha</label>
      </div>
    </div>
    <SendButton/>
  </div>
</template>

<style scoped>

@import '../../../assets/Sass/configProfile/_passwordInputs.scss';
</style>
