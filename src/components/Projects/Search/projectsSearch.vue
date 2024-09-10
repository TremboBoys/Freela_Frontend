<script setup>
    import inputSearch from '../Search/inputSearch.vue'
    import categoriesSearch from '../Search/categoriesSearch.vue'
    import bottomSearch from '../Search/bottomSearch.vue'
</script>
<template>
    <div class="search">
            <input-search />
            <categories-search />
            <bottom-search />
    </div>
</template>
<style scoped>
@import '@/assets/Sass/project/_project.scss';
</style>