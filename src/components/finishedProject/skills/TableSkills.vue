<script setup>
import { ref } from 'vue';
import TitleSkillsVue from './TitleSkills.vue';
import RatingRow from './RatingRow.vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const ratingCriteria = [
  { label: 'Conversa' },
  { label: 'Suporte' },
  { label: 'Preço' }
];
</script>

<template>
  <div class="container">
    <TitleSkillsVue @toggleDropdown="toggleDropdown" />
    
    <div class="rating-table">
      <table>
        <thead>
          <tr>
            <th id="none"></th>
            <th>Péssimo</th>
            <th>Ruim</th>
            <th>Mediano</th>
            <th>Bom</th>
            <th>Excelente</th>
          </tr>
        </thead>
        <tbody>
          <RatingRow v-for="criterion in ratingCriteria" :key="criterion.label" :label="criterion.label" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/Sass/proposal/skills/_tableSkills.scss';
.rating-table {
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      min-width: 120px;
      max-width: 120px;
    }

    th {
      background-color: #f5f5f5;
    }
  }
}
</style>
