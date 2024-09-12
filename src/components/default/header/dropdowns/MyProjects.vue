<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);

const myProjects = [
  { name: 'Meus Projetos', path: '/' },
  { name: 'Projetos com maior avaliação', path: '/' },
  { name: 'Contrate como freelancer', path: '/' },
];

</script>

<template>
<div class="dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <p class="dropdown-text">Encontre Trabalho</p>
    
    <div v-show="isDropdownOpen" class="dropdown-menu">
        <RouterLink class="routerlink" to="/" v-for="(link, index) in myProjects" :key="index">{{ link.name }}</RouterLink>
    </div>
  </div>
  
</template>

<style scoped>
@import '../../../../assets/Sass/default/header/_dropdown.scss';


</style>