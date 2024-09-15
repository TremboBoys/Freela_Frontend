<script setup>
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
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/skills/_skillsTable.scss';
</style>