<script setup>
const props = defineProps({
    title: String,
    placeholder: String,
})
</script>
<template>
    <div class="container">
        <h1 class="title">{{ title }}</h1>
        <div class="input-field">
            <input type="text" placeholder="Digite seu título" />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/report/_titleProject.scss';
</style>