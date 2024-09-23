<script setup>
import { ref } from "vue";
import TitleSkillsVue from "./TitleSkills.vue";
import SkillsTable from "./SkillsTable.vue";
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
  <div class="container">
    <TitleSkillsVue @toggleDropdown="toggleDropdown" />
    <SkillsTable :dropdownOpen="isDropdownOpen"/>
  </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/skills/_tableSkills.scss';
</style>