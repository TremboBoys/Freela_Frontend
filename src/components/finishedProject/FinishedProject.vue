<script setup>
import Title from '@/components/finishedProject/title/TitleProject.vue'
import InputsProject from './inputs/InputsProject.vue';
import TableSkills from './skills/TableSkills.vue';
import SendProject from './send/SendProject.vue';
</script>
<template>
    <div class="container">
        <div class="header">
            <Title />
        </div>
        <div class="inputs">
            <InputsProject />
        </div>
        <div class="table">
            <TableSkills />
        </div>
        <div class="submit">
            <SendProject />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/_proposalLayout.scss';
</style>