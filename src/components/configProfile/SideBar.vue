<script setup>
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth/auth';

const route = useRoute();
const useAuth = useAuthStore();

const tabs = [
  { route: '/configurations', icon: new URL('@/assets/images/configProfile/person-icon.png', import.meta.url).href, text: 'Informações pessoais' },
  { route: '/configurations/password', icon: new URL('@/assets/images/configProfile/padlock-icon.png', import.meta.url).href, text: 'Senha' },
  { route: '/configurations/email', icon: new URL('@/assets/images/configProfile/email-icon.png', import.meta.url).href, text: 'Email' },
  { route: '/configurations/subscription', icon: new URL('@/assets/images/configProfile/medal-icon.png', import.meta.url).href, text: 'Plano de assinatura' },
  { route: '/configurations/security', icon: new URL('@/assets/images/configProfile/security-icon.png', import.meta.url).href, text: 'Segurança' }
];

function createURL(path) {
  const url = URL.createObjectURL(path);
  console.log(url);
}
</script>
<template>
  <div class="sideBar">
    <div class="tabs-area">
      <RouterLink v-for="(tab, index) in tabs" :key="index" :to="tab.route" class="tab"
        :class="route.path === tab.route ? 'active' : ''">
        <img :src="tab.icon" :alt="tab.text">
        <p>{{ tab.text }}</p>
      </RouterLink>
    </div>

    <div class="logout" @click="useAuth.signOut()">
      <img src="@/assets/images/configProfile/logout.png" class="icon" alt="">Sair da sua conta
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/Sass/configProfile/_sideBar.scss";
</style>