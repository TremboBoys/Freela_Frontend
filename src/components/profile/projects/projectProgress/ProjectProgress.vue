<script setup>
import CardProject from './CardProject.vue';
</script>
<template>
    <div class="container">
        <div class="title">
            <h1>Projetos em execução</h1>
        </div>
        <div class="cards">
            <CardProject />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/profile/projects/projectProgress/_container.scss';
</style>