<script setup>
defineProps(['title'])
</script>

<template>
    <button type="submit">{{ title }}</button>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_sendButton.scss';
</style>