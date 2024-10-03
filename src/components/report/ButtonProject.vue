<script setup>
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
<template>
    <button class="btn" @click="handleClick">
        <slot></slot>
    </button>
</template>
<style scoped>
@import '@/assets/Sass/report/_buttonFreela.scss';
</style>