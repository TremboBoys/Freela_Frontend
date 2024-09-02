<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <div class="header-leftSide">
            <RouterLink to=""><img id="logo" src="../../assets/images/workana-logo.png" alt=""></RouterLink>
            <ul class="links">
                <li><RouterLink to="/">Encontre trabalho</RouterLink></li>
                <li><RouterLink to="/">Meus projetos</RouterLink></li>
                <li><RouterLink to="/">Minhas finanças</RouterLink></li>
            </ul>
        </div>
        <div class="header-rightSide">
            <div class="icons">
               <RouterLink to="/"><img src="../../assets/images/search-icon.png" alt=""></RouterLink>
               <RouterLink to="/"><img src="../../assets/images/chat-icon.webp" alt=""></RouterLink>
               <RouterLink to="/"><img src="../../assets/images/crown-icon.webp" alt=""></RouterLink>
               <RouterLink to="/"><img src="../../assets/images/usuario-de-perfil.png" alt=""></RouterLink>
            </div>
        </div>
    </header>
</template>
<style scoped>
@import '../../assets/Sass/default/_defaultHeader.scss';
</style>