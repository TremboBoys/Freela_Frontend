<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);

const myProjects = [
  { name: 'Meus Projetos', path: '/dashboard' },
  { name: 'Projetos com maior avaliação', path: '/projects' },
  { name: 'Contrate um freelancer', path: '/freelancers' },
];

</script>

<template>
  <div class="dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <p class="dropdown-text">Projetos</p>
    <div v-show="isDropdownOpen" class="dropdown-menu">
      <router-link 
        v-for="(link, index) in myProjects" 
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