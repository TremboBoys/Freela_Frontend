<script setup>
const props = defineProps({
    title: String,
})
</script>
<template>
    <div class="container">
        <h1>{{ title }}</h1>
    </div>
</template>