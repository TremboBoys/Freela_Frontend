<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);
const jobLinks = [
  { name: 'Encontre Projeto', path: '/projects' },
  { name: 'Encontre projetos na minha área', path: '/projects' },
  { name: 'Minha área favorita', path: '/projects' },
  { name: 'Assinatura do Plano', path: '/subscription-plan' },
]
</script>

<template>
  <div class="dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <p class="dropdown-text">Encontre Trabalho</p>
    <div v-show="isDropdownOpen" class="dropdown-menu">
      <router-link 
        v-for="(link, index) in jobLinks" 
        :key="index" 
        class="routerlink" 
        :to="link.path"
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import '../../../../assets/Sass/default/header/_dropdown.scss';
</style>
