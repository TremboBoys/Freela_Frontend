<script setup>
import { onMounted } from 'vue';
import { LogoAndName, InfosProfile, MainSkill, AboutMes, ProjectInProgress, CompletedProjects } from '@/components';
import { usePerfilStore } from '@/stores/perfil/perfil';

const usePerfil = usePerfilStore();

onMounted(async() => {
    await usePerfil.getPerfil();
});
</script>

<template>
    <div class="container">
        <div class="profile">
            <LogoAndName :name="usePerfil.perfil.user.name" :area="usePerfil.perfil.area.name" />
            <InfosProfile :balance="usePerfil.perfil.balance" :price-per-hour="usePerfil.perfil.price_per_hour" />
            <MainSkill />
            <AboutMes :about-me="usePerfil.perfil.about_me" />
        </div>
        <div class="projects">
            <ProjectInProgress />
            <CompletedProjects />
        </div>
    </div>
    
</template>

<style scoped>
@import '@/assets/Sass/dashboard/_dashboardPage.scss';
</style>