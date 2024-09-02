<script setup>
import DefaultFooter from '@/components/default/DefaultFooter.vue';
import DefaultHeader from '@/components/default/DefaultHeader.vue';
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