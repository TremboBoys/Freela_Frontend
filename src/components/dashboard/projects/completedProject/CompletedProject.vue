<script setup>
import CardProject from './CardProject.vue';
</script>
<template>
    <div class="container">
        <div class="title">
            <h1>Projetos em Destaque</h1>
        </div>
        <div class="cards">
            <CardProject />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/projects/completedProject/_container.scss';
</style>