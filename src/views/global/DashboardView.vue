<script setup>
import LogoName from '@/components/dashboard/profile/LogoName.vue';
import InfoProfile from '@/components/dashboard/profile/InfoProfile.vue';
import PublicProfile from '@/components/dashboard/profile/PublicProfile.vue';
import MainSkills from '@/components/dashboard/profile/MainSkills.vue';
import FavoriteArea from '@/components/dashboard/profile/FavoriteArea.vue';
import AboutMe from '@/components/dashboard/profile/AboutMe.vue';
import ProjectProgress from '@/components/dashboard/projects/projectProgress/ProjectProgress.vue';
import CompletedProject from '@/components/dashboard/projects/completedProject/CompletedProject.vue';
</script>

<template>
    <div class="container">
        <div class="profile">
            <LogoName />
            <InfoProfile />
            <PublicProfile />
            <MainSkills />
            <FavoriteArea />
            <AboutMe />
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