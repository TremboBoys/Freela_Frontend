<script setup>
import DefaultFooter from '@/components/default/footer/DefaultFooter.vue';
import DefaultHeader from '@/components/default/header/DefaultHeader.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <DefaultHeader/>
    <main>
        <RouterView/>
    </main>
    <DefaultFooter/>
</template>

<style scoped>

</style>