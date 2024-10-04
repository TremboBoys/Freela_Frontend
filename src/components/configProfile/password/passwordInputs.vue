<script setup></script>

<template>
  <div class="passwordInputs">
    <h1>Configuração de Senha</h1>
    <div class="inputs">
      <input type="password" value="teste" disabled />
      <input type="password" />
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
    </div>
    <button></button>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_passwordInputs.scss';
</style>
