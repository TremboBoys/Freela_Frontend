<script setup>
import { useRegisterProjectStore } from '@/stores/project/register-project';
import ButtonOption from '@/components/registerProject/projectRegistration/ButtonOption.vue'
import generateUuid from '@/utils/generateUuid';

const useRegisterProject = useRegisterProjectStore();
</script>
<template>
    <div class="text">
        <p>Suporte Administrativo</p>
    </div>
    <ButtonOption text="SEO" :uuid="generateUuid()" />
    <ButtonOption text="Vendedor" :uuid="generateUuid()" />
    <ButtonOption text="Data Analytics" :uuid="generateUuid()" />
    <ButtonOption text="Outros" :uuid="generateUuid()" />
    <RouterLink :to="(useRegisterProject.canNextPage('description')) ? '/register-project/description' : '/register-project/'" class="router-link">
        <button class="continue">
            <p>Continuar</p>
        </button>
    </RouterLink>
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>