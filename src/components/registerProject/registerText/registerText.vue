<script setup>
import registerOption from "../registerText/registerOption.vue"
import registerOption2 from "../registerText/registerOption2.vue"
import registerOption3 from "../registerText/registerOption3.vue"
import registerOption4 from "../registerText/registerOption4.vue"
</script>
<template>
   <div class="register">
            <h1>Cadastre seu projeto</h1>
            <div class="project">
                <p class="text-register">Qual é o tema do seu projeto?</p>
                <registerOption />
                <registerOption2 />
                <registerOption3 />
                <registerOption4 />
            </div>
        </div>
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>