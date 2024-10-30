<script setup>
import { ref } from 'vue';
import PopUp from './popUp/PopUp.vue';

const categories = ref([
  'TI e Programação',
  'Web Design',
  'Design',
  'Administração',
  'Tradução',
  'Minha área favorita',
  'Maiores avaliações'
]);

// Controle do pop-up de localização
const showPopup = ref(false);
const location = ref(null);

// Ações quando o usuário permite ou nega a localização
const handleDeny = () => {
  showPopup.value = false;
  alert('Acesso à localização foi negado.');
};

const handleAllow = (position) => {
  showPopup.value = false;
  location.value = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  };
  alert(`Localização permitida! Latitude: ${location.value.latitude}, Longitude: ${location.value.longitude}`);
};
</script>

<template>
  <div class="search">
    <div class="inputSearch">
      <div class="form-group inputBox">
        <input
          type="text"
          class="form-control"
          id="search"
          aria-describedby="searchHelp"
          placeholder=" "
        />
        <label class="searchlabelInput" for="search">Pesquisar</label>
      </div>
    </div>
    
    <div class="categories">
      <div class="category" v-for="(category, index) in categories" :key="index">
        <label>
          <input type="checkbox" />
          {{ category }}
        </label>
      </div>
    </div>

    <div class="bottom-search">
      <p>
        Ative a localização para uma melhor experiência: 
        <a href="#" @click.prevent="showPopup = true">Ative aqui!</a>
      </p>
    </div>
    
    <PopUp 
      :show="showPopup" 
      @deny="handleDeny" 
      @allow="handleAllow" 
    />
  </div>
</template>

<style scoped>
@import '@/assets/Sass/project/_project.scss';
@import '../../assets/Sass/project/_search.scss';
</style>
