<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="header-rightSide">
        <div class="icons">
            <RouterLink to="/chat"><img src="../../../assets/images/chat-icon.png" alt=""></RouterLink>
            <RouterLink to="/subscription-plan"><img src="../../../assets/images/crown-icon.png" alt=""></RouterLink>
            <RouterLink to="/dashboard"><img src="../../../assets/images/usuario-de-perfil.png" alt=""></RouterLink>
        </div>
        <div class="menu">
            <div class="hamburger-menu" @click="toggleMenu">
    <div class="bar" :class="{ active: isOpen }"></div>
    <div class="bar" :class="{ active: isOpen }"></div>
    <div class="bar" :class="{ active: isOpen }"></div>
    <div v-if="isOpen" class="dropdown">
      <router-link to="/" @click="toggleMenu">Home</router-link>
      <router-link to="/about" @click="toggleMenu">About</router-link>
      <router-link to="/services" @click="toggleMenu">Services</router-link>
      <router-link to="/contact" @click="toggleMenu">Contact</router-link>
    </div>
  </div>
        </div>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_rightSide.scss';
</style>