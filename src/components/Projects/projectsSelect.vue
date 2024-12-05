<script setup>
import { ref, onMounted } from 'vue';
import { useProjectsStore } from '@/stores/project/projects';
import { compareDates, formatDate } from '@/utils/compareDates';

const useProject = useProjectsStore();

onMounted(async() => {
    if (useProject.projects.length == 0) {
        useProject.getProjects();
    }
});
// const isPopUpOpen = ref(false);
// const popUp = () => {
//     isPopUpOpen.value = !isPopUpOpen.value;
// }
</script>
<template>
    <div class="selectProject" v-for="(project, index) in useProject.projects" :key="project">
        <div class="select">
            <div class="select-header-container">
                <div class="select-header">
                    <p><RouterLink :to="'/project/' + project.id">{{ project.title }}</RouterLink></p>
                </div>
                <div class="select-header2">
                    <p>{{ (project.budget_range == 1) ? 'R$100 - 1000' : (project.budget_range == 2) ? 'R$1000 - 5000' : (project.budget_range == 3) ? 'R$5000 - 10000' : 'Mais de R$10000'}}</p>
                </div>
            </div>
            <div class="select-main-container">
                <div class="select-subTitle">
                    <p>Publicado {{ compareDates(project.created_at) }}</p>
                    <p>Prazo de entrega: {{ formatDate(project.delivery) }}</p>
                    <p>Propostas: 10</p>
                </div>
                <div class="select-text">
                    <p>{{ project.description }}</p>
                </div>
                <div class="select-bottom-container">
                    <div class="select-bottom">
                        <p>Web Design</p>
                    </div>
                    <div class="select-bottom">
                        <p>Javascript</p>
                    </div>
                    <div class="select-bottom">
                        <p>CSS</p>
                    </div>
                </div>
            </div>
            <div class="select-footer-container">
                <div class="select-footer-img">
                    <img src="@/assets/images/perfil-project.png" alt="">
                </div>
                <div class="select-footer-descrition">
                    <div class="p-container">
                        <p class="select-footer-text1">
                            <RouterLink :to="'/profile/' + project.contractor.id">{{ project.contractor.name }}</RouterLink>
                        </p>
                        <p class="select-footer-text2">Ultima resposta: há 8 horas</p>
                    </div>
                    <div class="select-footer-images">
                        <img src="@/assets/images/stars-project.png" alt="">
                        <img id="flag-img" src="@/assets/images/brasil-icon.png" alt="">
                    </div>
                </div>
                <router-link :to="`/proposal-registration/${project.id}`" class="select-footer-proposal">
                    <p>Fazer Proposta</p>
                </router-link>
            </div>
        </div>
    </div>
    <div v-if="useProject.projects.length == 0" class="notSearch">
        <h1>Não encontramos nenhum resultado para a sua busca :(</h1>
        <img src="@/assets/images/search.gif" alt="">
    </div>
</template>
<style scoped>
/* @import '../../assets/Sass/project/_project.scss'; */
@import '../../assets/Sass/project/_select.scss';
</style>