<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <div class="header-leftSide">
            <img src="../../assets/images/workana-logo.png" alt="">
            <ul class="links">
                <li><RouterLink to="/">Encontre trabalho</RouterLink></li>
                <li><RouterLink to="/">Meus projetos</RouterLink></li>
                <li><RouterLink to="/">Minhas finanças</RouterLink></li>
            </ul>
        </div>
        <div class="header-rightSide">
            <div class="icons">
                <img src="../../assets/images/search-icon.png" alt="">
                <img id="chat-icon" src="../../assets/images/chat-icon.webp" alt="">
                <img src="../../assets/images/crown-icon.webp" alt="">
                <img src="../../assets/images/usuario-de-perfil.png" alt="">
            </div>
        </div>
    </header>
</template>
<style scoped>
@import '../../assets/Sass/default/_defaultHeader.scss';
</style>