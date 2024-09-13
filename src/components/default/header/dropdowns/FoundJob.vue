<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);

const jobLinks = [
  { name: 'Encontre Projeto', path: '/' },
  { name: 'Encontre projetos na minha área', path: '/' },
  { name: 'Minha área favorita', path: '/' },
  { name: 'Assinatura do Plano', path: '/' },
]
</script>

<template>
<div class="dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <p class="dropdown-text">Encontre Trabalho</p>
    
    <div v-show="isDropdownOpen" class="dropdown-menu">
        <RouterLink class="routerlink" to="/" v-for="(link, index) in jobLinks" :key="index">{{ link.name }}</RouterLink>

    </div>
  </div>
  
</template>

<style scoped>
@import '../../../../assets/Sass/default/header/_dropdown.scss';


</style>