<script setup>
const props = defineProps(['aboutMe']);
</script>

<template>
    <div class="container">
        <div class="text">
            <span><span class="aboutMe">Sobre mim:</span> {{ (props.aboutMe) ? props.aboutMe : 'Escreva um pouco mais sobre você para seus usuários!' }} </span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_aboutMe.scss';
</style>