<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
    <div class="container">
        <div class="public">
            <p>Perfil Público:</p>
            <div class="switch" :class="{ 'active': isActive }" @click="toggle">
                <div class="slider"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_publicProfile.scss';
</style>