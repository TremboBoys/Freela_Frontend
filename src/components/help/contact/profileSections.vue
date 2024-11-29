<script setup>
import defaultClient from './buttons/clientButtons/defaultClient.vue';
import defaultFreelancer from './buttons/freelancerButtons/defaultFreelancer.vue';
import selectedClient from './buttons/clientButtons/selectedClient.vue';
import selectedFreelancer from './buttons/freelancerButtons/selectedFreelancer.vue';
import { ref } from 'vue';
import clientHelp from './clientHelp.vue';

// Estados reativos para os perfis
const client = ref(true);
const freelancer = ref(true);

// Alternar perfil
function selectClient() {
  if (client.value === true) {
    client.value = false;
  freelancer.value = true;
  }
  else {
    client.value = true;
  }
};
function selectFreelancer(){
  if (freelancer.value === true) {
    freelancer.value = false;
    client.value = true;
}
  else {
    freelancer.value = true;
  }
}
</script>

<template>
  <div class="profile">
    <div class="profile-title">
      <div class="number">
        <p>1</p>
      </div>
      <div class="text">
        <p>Selecione seu perfil de consulta</p>
      </div>
    </div>
    <div class="select-Perfil">
      <defaultClient @click = selectClient()  v-if="client" />
      <selectedClient  @click = selectClient() v-if="!client" />
      <defaultFreelancer @click = selectFreelancer() v-if="freelancer" />
      <selectedFreelancer @click = selectFreelancer() v-if="!freelancer" />
    </div>
    <clientHelp v-if="!client" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/Sass/help/contact/_profileSection.scss';
</style>
