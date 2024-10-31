<script setup>
import RegisterOption from "./RegisterOption.vue"
import RegisterOption2 from "./RegisterOption2.vue"
import RegisterOption3 from "./RegisterOption3.vue"
import RegisterOption4 from './RegisterOption4.vue'
</script>
<template>
   <div class="register">
            <h1>Cadastre seu projeto</h1>
            <div class="project">
                <p class="text-register">Qual é o tema do seu projeto?</p>
                <RegisterOption />
                <RegisterOption2 />
                <RegisterOption3 />
                <RegisterOption4 />
            </div>
        </div>
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>