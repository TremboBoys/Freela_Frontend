<script setup>
import ButtonOption from "@/components/registerProject/projectRegistration/ButtonOption.vue";
import generateUuid from "@/utils/generateUuid";
</script>

<template>
  <div class="text">
    <p>TI e Programação</p>
  </div>
  
  <ButtonOption text="Programação" :uuid="generateUuid()" />
  <ButtonOption text="Wordpress" :uuid="generateUuid()" />
  <ButtonOption text="Web Design" :uuid="generateUuid()" />
  <ButtonOption text="Programação de Apps" :uuid="generateUuid()" />
  <ButtonOption text="Inteligência artificial" :uuid="generateUuid()" />
  <ButtonOption text="Outros" :uuid="generateUuid()" />
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>
