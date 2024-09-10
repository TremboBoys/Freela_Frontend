<script setup>
    import { ref } from 'vue';

const categories = ref([
  'TI e Programação',
  'Web Design',
  'Design',
  'Administração',
  'Tradução',
  'Minha área favorita',
  'Maiores avaliações'
]);
</script>
<template>
<div class="categories">
    <div class="category" v-for="(category, index) in categories" :key="index">
         <label>
            <input type="checkbox">
            {{ category }}
        </label>
    </div>
</div>
</template>
<style scoped>
    @import '@/assets/Sass/project/_project.scss';
</style>