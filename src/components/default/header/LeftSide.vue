<script setup>
import FoundJob from './dropdowns/FoundJob.vue';
import MyProjects from './dropdowns/MyProjects.vue';
import MyFinances from './dropdowns/MyFinances.vue';
</script>

<template>
    <div class="header-leftSide">
        <RouterLink to="/"><img id="logo" src="../../../assets/images/logo/tasker-logo.png" alt=""></RouterLink>
        <div class="dropdowns">
            <FoundJob/>
            <MyProjects/>
            <MyFinances/>
        </div>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_leftSide.scss';
</style>