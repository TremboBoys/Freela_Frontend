<script setup>
import { LogoName, InfoProfile, MainSkills, FavoriteArea, AboutMe, ProjectProgress, CompletedProject } from '@/components';
import { usePerfilStore } from '@/stores/perfil/perfil';

const usePerfil = usePerfilStore();
</script>

<template>
    <div class="container">
        <div class="profile">
            <LogoName :name="usePerfil.perfil.user.name" :area="usePerfil.perfil.area.name" />
            <InfoProfile :balance="usePerfil.perfil.balance" :price-per-hour="usePerfil.perfil.price_per_hour" />
            <MainSkills />
            <FavoriteArea />
            <AboutMe :about-me="usePerfil.perfil.about_me" />
        </div>
        <div class="projects">
            <ProjectProgress />
            <CompletedProject />
        </div>
    </div>
    
</template>

<style scoped>
@import '@/assets/Sass/dashboard/_dashboardPage.scss';
</style>