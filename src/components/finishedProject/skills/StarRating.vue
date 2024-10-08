<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  selected: Object, // Recebe a avaliação selecionada da linha
  rating: Number    // Valor de 1 a 5 para as estrelas
});

const isActive = ref(false);

// Monitora a seleção e ajusta a aparência da estrela
watch(() => props.selected, (newVal) => {
  isActive.value = props.selected.value >= props.rating;
});

const selectRating = () => {
  props.selected.value = props.rating;
};
</script>

<template>
  <span class="star" :class="{ active: isActive }" @click="selectRating">
    <i :class="isActive ? 'fas fa-star' : 'far fa-star'"></i>
  </span>
</template>

<style scoped>
@import '@/assets/Sass/finishedProject/_starRating.scss';
</style>
