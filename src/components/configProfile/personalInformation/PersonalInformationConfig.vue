<script setup>
import ConfigInputs  from './ConfigInputs.vue';
import SkillsTable from './SkillsTable.vue';
import SendButton from '../password/SendButton.vue';
</script>

<template>
    <div class="personal-container">
        <ConfigInputs/>
        <SkillsTable/>
        <SendButton title="Salvar" />
    </div>
</template>

<style scoped>
    @import "../../../assets/Sass/configProfile/_personalInformation.scss";
</style>