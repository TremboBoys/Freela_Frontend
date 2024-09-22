<script setup>
import ConfigInputs  from './ConfigInputs.vue';
import SkillsTable from './SkillsTable.vue';
</script>

<template>
    <div class="personal-container">
        <ConfigInputs/>
        <SkillsTable/>
    </div>
</template>

<style scoped>
    @import "../../../assets/Sass/configProfile/_personalInformation.scss";
</style>