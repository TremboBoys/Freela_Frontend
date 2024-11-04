<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isActive: Boolean,
});
const emit = defineEmits(['toggle']);

function toggleMenu() {
  emit('toggle');
}
</script>

<template>
    <button :class="{ active: props.isActive }" class="hamburger" @click="toggleMenu"></button>
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_hambugerButton.scss';
</style>