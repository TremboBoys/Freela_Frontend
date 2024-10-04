<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['deny', 'allow']);

const denyAccess = () => {
  emit('deny');
};

const allowAccess = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        emit('allow', position);
      },
      () => {
        emit('deny');
      }
    );
  } else {
    emit('deny');
  }
};
</script>

<template>
  <div class="popup-backdrop" v-if="show">
    <div class="popup">
      <h2>Permitir acesso à sua localização?</h2>
      <p>Precisamos de sua permissão para acessar a sua localização.</p>
      <div class="buttons">
        <button @click="denyAccess">Negar</button>
        <button @click="allowAccess">Permitir</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/Sass/project/popUp/_popUp.scss';
</style>
