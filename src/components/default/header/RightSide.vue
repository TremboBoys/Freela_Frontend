<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="header-rightSide">
        <div class="icons">
            <RouterLink to="/chat"><img src="../../../assets/images/chat-icon.png" alt=""></RouterLink>
            <RouterLink to="/subscription-plan"><img src="../../../assets/images/crown-icon.png" alt=""></RouterLink>
            <RouterLink to="/dashboard"><img src="../../../assets/images/usuario-de-perfil.png" alt=""></RouterLink>
        </div>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_rightSide.scss';
</style>