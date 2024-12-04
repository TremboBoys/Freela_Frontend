<script setup>
import ConfPasswordTitles from './ConfPasswordTitles.vue'
import CodeVerification from './CodeVerification.vue'
import SendButton from '../password/SendButton.vue'
</script>

<template>
    <div class="confArea">
        <ConfPasswordTitles/>
        <CodeVerification/>
        <RouterLink to="/configurations/password"><SendButton title="Enviar" /></RouterLink>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_confirmationArea.scss';

</style>