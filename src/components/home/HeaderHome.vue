<script setup>
import { useAuthStore } from '@/stores/auth/auth';

const useAuth = useAuthStore();
</script>

<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo/tasker-logo.png" alt="Logo" />
      </router-link>
    </div>
    <nav>
      <p>Já tem uma conta?</p>
      <button class="router button" @click="useAuth.state.showLogin = true">Entrar</button>
    </nav>
  </header>
</template>
<style scoped>
@import "@/assets/Sass/home/_headerHome.scss";
</style>