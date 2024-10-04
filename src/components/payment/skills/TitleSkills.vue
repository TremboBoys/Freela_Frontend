<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggleDropdown']);

const editInfo = () => {
  emit('toggleDropdown');
};
</script>

<template>
  <div class="header">
    <h1>Adicione sua Avaliação ao Cliente</h1>
    <button @click="editInfo" class="edit-button">
      <img src="@/assets/images/proposal/pen.png" alt="Editar">
    </button>
  </div>
</template>

<style scoped>
@import '@/assets/Sass/proposal/skills/_titleSkills.scss';
</style>