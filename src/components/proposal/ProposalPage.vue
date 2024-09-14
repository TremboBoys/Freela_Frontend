<script setup>
import Title from '@/components/proposal/title/TitleProposal.vue'
import InputsProposal from './inputs/InputsProposal.vue';
import TableSkills from './skills/TableSkills.vue';
</script>
<template>
    <div class="container">
        <div class="header">
            <Title />
        </div>
        <div class="inputs">
            <InputsProposal />
        </div>
        <div class="table">
            <TableSkills />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/_proposalLayout.scss';
</style>