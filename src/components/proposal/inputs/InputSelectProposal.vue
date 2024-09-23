<script setup>
import { ref } from 'vue';

const selectedActivity = ref('TI & Programação');
const selectedLanguage = ref('Português');
const selectedRole = ref('Front-end Developer');
const roles = ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer', 'Designer', 'DevOps'];
const languages = [
    "Mandarim", "Inglês", "Hindi", "Espanhol", "Francês", "Árabe", "Bengali", "Russo", "Português", "Urdu"
];
const activitys = ["TI & Programação", "Design & Multimedia", "Tradução & Conteúdos", "Marketing & Vendas", "Suporte Administrativo"];
</script>
<template>
    <div class="dropdown">
        <label for="profession">Freelancer</label>
        <div class="select-container">
            <select id="profession" v-model="selectedRole">
                <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
            </select>
            <span class="arrow">▼</span>
        </div>
    </div>
    <div class="dropdown dropdown-2">
        <label for="language">Linguagem</label>
        <div class="select-container">
            <select id="language" v-model="selectedLanguage">
                <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
            </select>
            <span class="arrow">▼</span>
        </div>
    </div>
    <div class="dropdown dropdown-2">
        <label for="activity">Atividade Freelancer</label>
        <div class="select-container">
            <select id="activity" v-model="selectedActivity">
                <option v-for="activity in activitys" :key="activity" :value="activity">{{ activity }}</option>
            </select>
            <span class="arrow">▼</span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/inputs/_inputSelect.scss';
</style>