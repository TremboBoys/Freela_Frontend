<script setup>
const props = defineProps(['about']);
</script>

<template>
    <div class="container-about">
        <p class="aboutMe">Sobre mim</p>
        <div class="text">
            <span>{{ props.about }}</span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_aboutMe.scss';
</style>