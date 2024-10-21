<script setup>
import ConfEmailTitles from './ConfEmailTitles.vue'
import CodeVerification from './CodeVerification.vue'
import SendButton from '../password/SendButton.vue'
</script>

<template>
    <div class="confArea">
        <ConfEmailTitles/>
        <CodeVerification/>
        <RouterLink to="/configurations/email" ><SendButton/></RouterLink>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_confirmationArea.scss';

</style>