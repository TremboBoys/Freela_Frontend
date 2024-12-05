<script setup>
import { useProjectsStore } from '@/stores/project/projects';
import { formatDate } from '@/utils/compareDates';

const useProject = useProjectsStore();
</script>

<template>
        <div v-for="(project, index) in useProject.myProjects" :key="index" :style="(useProject.myProjects.length == 1) ? 'width: 35vw' : 'width: 25vw'" class="card">
            <div class="title">
                <h2>{{ project.title }}</h2>
            </div>
            <div class="term">
                <p>Prazo: {{ formatDate(project.delivery) }}</p>
            </div>
            <div class="description">
                <p>{{ project.description }}</p>
            </div>
            <div class="footer">
                <div class="pending">
                    <img src="@/assets/images/dashboard/clock-icon.png" class="clock" alt="">
                    <span>Status: {{ (project.status == 1) ? 'Não iniciado' : 'Pendente' }}</span>
                </div>
                <div class="right">
                    <router-link to="finished-project" class="toSend">
                        <button class="toSendButton">Enviar</button>
                    </router-link>
                    <div class="help">
                        <img src="@/assets/images/dashboard/interrogacao.png" class="helpImg" alt="">
                    </div>
                </div>
            </div>
        </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/projects/projectProgress/_cardProject.scss';
</style>