<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/workana-logo.png" alt="Logo" />
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
@import "@/assets/Sass/Home/_headerHome.scss";
</style>