<script setup>
const props = defineProps({
  label: String,
  modelValue: String,
  placeholder: String,
});
const emit = defineEmits(['update:modelValue']);
</script>
<template>
    <div class="container">
        <div class="input-field">
            <h1>Relatório</h1>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/report/_titleFreela.scss';
</style>