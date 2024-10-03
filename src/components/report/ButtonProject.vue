<script setup>
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
<template>
  <div class="container">
    <button class="btn" @click="handleClick">
      Enviar relatório
    </button>
  </div>
</template>
<style scoped>
@import '@/assets/Sass/report/_buttonFreela.scss';
</style>