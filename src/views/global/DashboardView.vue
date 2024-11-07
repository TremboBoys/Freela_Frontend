<script setup>
import { onMounted } from 'vue';
import { LogoName, InfoProfile, PublicProfile, MainSkills, FavoriteArea, AboutMe, ProjectProgress, CompletedProject } from '@/components';
import { usePerfilStore } from '@/stores/perfil/perfil';

const usePerfil = usePerfilStore();

onMounted(async() => {
    await usePerfil.getPerfil();
});
</script>

<template>
    <div class="container">
        <div class="profile">
            <LogoName :name="usePerfil.perfil.user.name" :area="usePerfil.perfil.area.name" />
            <InfoProfile :balance="usePerfil.perfil.balance" :price-per-hour="usePerfil.perfil.price_per_hour" />
            <PublicProfile :active="usePerfil.perfil.is_public" />
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
.container {
    display: flex;
    max-width: 100vw;
}
.projects {
    width: 60vw;
    padding: 0 40px 0 0;
    margin-top: 48px;
}
</style>