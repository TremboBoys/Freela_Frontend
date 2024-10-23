<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);

const myFinances = [
  { name: 'Realizar pagamento', path: '/make-payment' },
];

</script>

<template>
  <div class="dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <p class="dropdown-text">Minhas Finanças</p>
    <div v-show="isDropdownOpen" class="dropdown-menu">
      <router-link 
        v-for="(link, index) in myFinances" 
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