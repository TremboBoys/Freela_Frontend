<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRegisterProjectStore } from '@/stores/project/register-project';

const route = useRoute();
const useRegisterProject = useRegisterProjectStore();

onMounted(async () => {
    await useRegisterProject.getCreatedProject(route.params.id);
})
</script>

<template>
    <div class="container-complete">
        <div class="header-complete">
            <h1>Projeto cadastrado com sucesso!</h1>
            <img src="../../../assets/images/complete.png" alt="">
        </div>
        <div class="main-complete">
            <p>Cadastrado como:</p>
            <div class="main-register-complete">
                <input type="checkbox" checked disabled>
                <p>TI e Programação</p>
            </div>
            <div class="main-register-complete2">
                <input type="checkbox" checked disabled>
                <p>Aplicação Web</p>
            </div>
        </div>
        <div class="footer-title-project-register">
            <p>Título do projeto</p>
            <input v-model="useRegisterProject.createdProject.title" disabled type="text">
        </div>
        <div class="footer-size">
            <div class="footer-barra-description-verde">

            </div>
            <div class="footer-barra-description-verde2">

            </div>
            <div class="footer-barra-description-verde2">

            </div>
            <div class="footer-barra-description-final">
                    
            </div>
        </div>
        <div class="bottom">
            <button>Ver Projeto</button>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_complete-project-registration.scss';
</style>