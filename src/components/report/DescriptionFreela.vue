<script setup>
const props = defineProps({
  label: String,
  modelValue: String,
  placeholder: String,
});
const emit = defineEmits(['update:modelValue']);
</script>
<template>
    <div class="text-area">
        <label>{{ label }}</label>
        <textarea :placeholder="placeholder" rows="6"></textarea>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/report/_descriptionFreela.scss';
</style>