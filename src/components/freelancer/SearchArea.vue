<script setup>
const categories = ['Nacionalidade', 'TI & Programação', 'Design', 'Administração', 'Tradução']
</script>

<template>
  <div class="search-container">
    <div class="search-area">
      <div class="form-group inputBox">
        <input
          type="text"
          class="form-control"
          id="text"
          aria-describedby="emailHelp"
          placeholder=" "
        />
        <label class="email labelInput" for="email">Pesquisar</label>
      </div>
      <ul>
        <li v-for="category in categories" :key="category">
          <input type="checkbox" name="" />
          {{ category }}
        </li>
      </ul>
    </div>
    <p>Ative a localização para uma melhor expêriencia: <RouterLink to="/">Ative aqui!</RouterLink></p>
  </div>
</template>

<style scoped>

@import '../../assets/Sass/freelancer/_searchArea.scss';
</style>
