<script setup>
import { ref } from 'vue'
const habilidades = [
  {
    habilidade: 'CSS',
    certificacao: '---',
    projetos: 0,
    experiencia: '1 ano'
  },
  {
    habilidade: 'JavaScript',
    certificacao: '---',
    projetos: 0,
    experiencia: '1 a 3 anos'
  },
  {
    habilidade: 'Web design',
    certificacao: '---',
    projetos: 0,
    experiencia: '1 a 3 anos'
  }
]
const dropdownOpen = ref(false)
function showDiv() {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<template>
  <div class="table-container">
    <div class="top-side">
      <h1>Adicione suas competências</h1>
      <img @click="showDiv" src="../../../assets/images/configProfile/pencil-icon.png" alt="" />
    </div>
    <div class="border-table">
      <table>
        <thead>
          <tr>
            <th>Habilidades</th>
            <th>Certificações</th>
            <th>Projetos trabalhados</th>
            <th>Anos de experiência</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in habilidades" :key="index">
            <td data-label="Habilidades">
              <span class="fill">{{ item.habilidade }}</span>
            </td>
            <td data-label="Certificações">{{ item.certificacao }}</td>
            <td data-label="Projetos trabalhados">{{ item.projetos }}</td>
            <td data-label="Anos de experiência">{{ item.experiencia }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="dropdownOpen" class="dropdown">
        <div class="dropdown-content">
          <input type="text" class="input" placeholder="Você pode selecionar até 3 opções" />
          <select class="select">
            <option value="1">1 ano</option>
            <option value="2">1 a 3 anos</option>
            <option value="3">3 a 5 anos</option>
            <option value="4">5 a 10 anos</option>
            <option value="5">10 anos ou mais</option>
          </select>
          <button class="button">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_skillsTable.scss';
</style>
