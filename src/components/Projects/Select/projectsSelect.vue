<script setup> 
import headerSelect from "../Select/headerSelect.vue";
import mainSelect from "../Select/mainSelect.vue";
import footerSelect from "../Select/footerSelect.vue"
</script>
<template>
    <div class="select">
        <header-select />
        <main-select />
        <footer-select />
    </div>
</template>
<style scoped>
@import '@/assets/Sass/project/_project.scss';
</style>