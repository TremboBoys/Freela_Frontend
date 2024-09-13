<template>
  <header>
    <div class="logo">
      <router-link to="/home">
        <img src="@/assets/images/workana-logo.png" alt="Logo" />
      </router-link>
    </div>
    <nav>
      <p>Já tem uma conta?</p>
      <router-link class="router" to="/sign-in">
        <button class="button">Entrar</button>
      </router-link>
    </nav>
  </header>
</template>
<style scoped>
@import "@/assets/Sass/home/_headerHome.scss";
</style>