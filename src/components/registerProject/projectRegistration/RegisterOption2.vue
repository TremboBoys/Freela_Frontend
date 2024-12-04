<script setup>
import ButtonOption from "@/components/registerProject/projectRegistration/ButtonOption.vue";
import generateUuid from "@/utils/generateUuid";
</script>
<template>
    <div class="text">
        <p>Design e Multimedia</p>
    </div>
    <ButtonOption text="Design de logos" :uuid="generateUuid()" />
    <ButtonOption text="Banners" :uuid="generateUuid()" />
    <ButtonOption text="Ilustrações" :uuid="generateUuid()" />
    <ButtonOption text="Criar ou editar vídeos" :uuid="generateUuid()" />
    <ButtonOption text="Infográficos" :uuid="generateUuid()" />
    <ButtonOption text="Design de apps mobile" :uuid="generateUuid()" />
    <ButtonOption text="Imagens para redes sociais" :uuid="generateUuid()" />
    <ButtonOption text="Imagem corporativa" :uuid="generateUuid()" />
    <ButtonOption text="Outros" :uuid="generateUuid()" />
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>