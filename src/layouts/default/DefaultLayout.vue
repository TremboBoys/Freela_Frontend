<script setup>
import { DefaultFooter, DefaultHeader } from '@/components'
import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <DefaultHeader />
        <RouterView />
        <DefaultFooter />
    </main>
</template>