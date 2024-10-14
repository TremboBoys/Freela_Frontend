<script setup>
import SendButton from '../password/SendButton.vue';
</script>

<template>
  <div class="emailInputs">
    <h1>Configuração de Email</h1>
    <div class="inputs">
      <div class="form-group inputBox">
        <input
          type="email"
          disabled
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
          value="luizblume@gmail.com"
        />
        <label class="email labelInput" for="email">Seu email</label>
      </div>
      <div class="form-group inputBox">
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
        />
        <label class="email labelInput" for="email">Seu novo email</label>
      </div>
      <div class="form-group inputBox">
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
        />
        <label class="email labelInput" for="email">Confirmar email</label>
      </div>
    </div>
    <RouterLink to="/ConfirmationEmail"><SendButton/></RouterLink>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_emailInputs.scss';
</style>