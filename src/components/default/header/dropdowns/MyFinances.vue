<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);

const myFinances = [
  { name: 'Opções de Pagamento', path: '/' },
  { name: 'Adicionar forma de pagamento', path: '/' },
  { name: 'Movimentação da conta', path: '/' },
  { name: 'Saldo total da conta', path: '/' },
];

</script>

<template>
<div class="dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <p class="dropdown-text">Encontre Trabalho</p>
    
    <div v-show="isDropdownOpen" class="dropdown-menu">
        <RouterLink class="routerlink" to="/" v-for="(link, index) in myFinances" :key="index">{{ link.name }}</RouterLink>

    </div>
  </div>
  
</template>

<style scoped>
@import '../../../../assets/Sass/default/header/_dropdown.scss';


</style>