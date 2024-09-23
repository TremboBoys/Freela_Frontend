<script setup>
import { DefaultFooter, DefaultHeader } from '@/components';
</script>

<template>
    <main>
        <DefaultHeader />
        <RouterView />
        <DefaultFooter />
    </main>
</template>