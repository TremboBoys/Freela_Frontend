<script setup>
    import RegisterDesign from "@/components/registerProject/registerDesign.vue";
    import RegisterText from "@/components/registerProject/registerText/registerText.vue";
</script>
<template>
    <div class="main-container">
        <Register-design />
        <RegisterText />
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>