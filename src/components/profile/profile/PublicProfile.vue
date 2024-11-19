<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    active: {
        type: Boolean,
        required: true
    }
});

const isActive = ref(false);

onMounted(() => isActive.value = props.active);

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
@import '@/assets/Sass/profile/profile/_publicProfile.scss';
</style>