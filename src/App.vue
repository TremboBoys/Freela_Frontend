<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useAuthStore } from '@/stores/auth/auth';

const usePerfil = usePerfilStore();
const useAuth = useAuthStore();

onMounted(async() => {
    const isAuthenticated = await useAuth.verifyAuth();
    if (isAuthenticated) await usePerfil.getPerfil();
    console.log(usePerfil.perfil.user.username)
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
