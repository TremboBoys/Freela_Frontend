<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { route: '/configurations', icon: ('imagens/person-icon.png'), text: 'Informações pessoais' },
  { route: '/configurations/password', icon: ('imagens/padlock-icon.png'), text: 'Senha' },
  { route: '/configurations/email', icon: ('imagens/email.png'), text: 'Email' },
  { route: '/configurations/subscription', icon: ('imagens/medal-icon.png'), text: 'Plano de assinatura' },
  { route: '/configurations/security', icon: ('imagens/security-icon.png'), text: 'Segurança' }
]
</script>
<template>
    <div class="sideBar">
      <div class="tabs-area">
        <RouterLink 
          v-for="(tab, index) in tabs" 
          :key="index" 
          :to="tab.route" 
          class="tab"
          :class="{ active: route.path === tab.route }">
          <img :src="tab.icon" :alt="tab.text">
          <p>{{ tab.text }}</p>
        </RouterLink>
      </div>
    </div>
  </template>

<style scoped>
@import "../../assets/Sass/configProfile/_sideBar.scss";

</style>