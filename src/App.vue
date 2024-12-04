<script setup>
import { onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useAuthStore } from '@/stores/auth/auth';

const usePerfil = usePerfilStore();
const useAuth = useAuthStore();
const router = useRoute();

onMounted(async() => {
  if (router.path !== '/') {
    const isAuthenticated = await useAuth.verifyAuth();
    if (isAuthenticated) await usePerfil.getPerfil();
    console.log(usePerfil.perfil.user.username)
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
