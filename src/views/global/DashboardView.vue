<script setup>
import { LogoName, InfoProfile, PublicProfile, MainSkills, FavoriteArea, AboutMe, ProjectProgress, CompletedProject } from '@/components';
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