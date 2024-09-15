<script setup>
import { ref } from 'vue';
const editInfo = () => {
  console.log('Edit info');
};
</script>
<template>
  <div class="header">
    <h1>Adicione suas competências</h1>
    <button @click="editInfo" class="edit-button"><img src="@/assets/images/proposal/pen.png" alt=""></button>
  </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/skills/_titleSkills.scss';
</style>