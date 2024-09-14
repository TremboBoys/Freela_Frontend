<script setup>
import TitleSkillsVue from "./TitleSkills.vue";
const skills = [
  { name: 'CSS', certifications: '---', projects: 0, experience: '1 ano' },
  { name: 'Javascript', certifications: '---', projects: 0, experience: '1 a 3 anos' },
  { name: 'Web Design', certifications: '---', projects: 0, experience: '1 a 3 anos' },
];
</script>

<template>
    <div class="container">
        <TitleSkillsVue /> 
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/skills/_tableSkills.scss';
</style>