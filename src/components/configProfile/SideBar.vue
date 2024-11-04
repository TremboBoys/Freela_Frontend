<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { route: '/configurations', icon: ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSQ54cez5FfmC1SwY94-WNqM_-RkzorKmkg&s'), text: 'Informações pessoais' },
  { route: '/configurations/password', icon: ('https://cdn-icons-png.flaticon.com/512/61/61457.png'), text: 'Senha' },
  { route: '/configurations/email', icon: ('https://cdn-icons-png.flaticon.com/512/561/561188.png'), text: 'Email' },
  { route: '/configurations/subscription', icon: ('https://www.shareicon.net/download/2016/01/05/698562_award_512x512.png'), text: 'Plano de assinatura' },
  { route: '/configurations/security', icon: ('https://cdn-icons-png.flaticon.com/512/95/95454.png'), text: 'Segurança' }
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