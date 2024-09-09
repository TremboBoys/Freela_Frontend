<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    dropdownOpen: Boolean
});

const skills = [
    { name: 'CSS', experience: '1 ano', rowClass: 'odd' },
    { name: 'Javascript', experience: '1 a 3 anos', rowClass: 'even' },
    { name: 'Web Design', experience: '1 a 3 anos', rowClass: 'odd' }
];
</script>
<template>
    <div class="container">
        <div class="skills-table">
            <table>
                <thead>
                    <tr>
                        <th>Habilidades</th>
                        <th>Certificações</th>
                        <th>Projetos Trabalhados</th>
                        <th>Anos de experiência</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="skill in skills" :key="skill.name" :class="skill.rowClass">
                        <td>
                            <span class="skill-name">{{ skill.name }}</span>
                        </td>
                        <td>---</td>
                        <td>0</td>
                        <td>{{ skill.experience }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-if="props.dropdownOpen" class="dropdown">
                <div class="dropdown-content">
                    <input type="text" class="input" placeholder="Você pode selecionar até 3 opções">
                    <select class="select">
                        <option value="1">1 ano</option>
                        <option value="2">1 a 3 anos</option>
                        <option value="3">3 a 5 anos</option>
                        <option value="4">5 a 10 anos</option>
                        <option value="5">10 anos ou mais</option>
                    </select>
                    <button class="button">Adicionar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/skills/_skillsTable.scss';
</style>
