<script setup>
import { LogoName, InfoProfile, PublicProfile, MainSkills, ReviewsProfile, AboutMe, ShortcutsProfile, ProjectProgress, CompletedProject, ExpandedReviews } from '@/components';
import { onMounted } from 'vue';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useProjectsStore } from '@/stores/project/projects';

const useProject = useProjectsStore();
const usePerfil = usePerfilStore();

onMounted(async() => {
    if (useProject.projects.length == 0) {
        await useProject.getProjects();
        useProject.getMyProjects();
    };
});
</script>

<template>
    <div :style="(usePerfil.state.showReviews) ? 'filter: blur(2px)' : ''" class="container">
        <div class="profile">
            <div class="controller">
                <LogoName :name="usePerfil.perfil.user.name" :area="usePerfil.perfil.area.name" />
                <InfoProfile :balance="usePerfil.perfil.balance" :price-per-hour="usePerfil.perfil.price_per_hour" />
                <!-- <PublicProfile :active="usePerfil.perfil.is_public" /> -->
                <MainSkills />
                <AboutMe :about="usePerfil.perfil.about_me" />
                <ShortcutsProfile />
            </div>
            <div class="reviews-area">
                <ReviewsProfile />
            </div>
        </div>
        <div class="projects">
            <CompletedProject />
            <ProjectProgress />
        </div>
    </div>
    <ExpandedReviews v-if="usePerfil.state.showReviews" />
</template>

<style scoped>
@import '@/assets/Sass/dashboard/_dashboardPage.scss';
</style>