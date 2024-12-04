<script setup>
import ButtonOption from '@/components/registerProject/projectRegistration/ButtonOption.vue';
import generateUuid from '@/utils/generateUuid';
</script>
<template>
  <div class="text">
    <p>Marketing e vendas</p>
  </div>
  <ButtonOption text="Vendedor" :uuid="generateUuid()" />
  <ButtonOption text="Data Analytics" :uuid="generateUuid()" />
  <ButtonOption text="E-mail Marketing" :uuid="generateUuid()" />
  <ButtonOption text="Community Management" :uuid="generateUuid()" />
  <ButtonOption text="Outros" :uuid="generateUuid()" />
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>
