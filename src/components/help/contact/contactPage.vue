<script setup>
 import contactTitle from './contactTitle.vue';
 import questionsHelp from './questionsHelp.vue';
 import helpCentral from './helpCentral.vue';
 import defaultClient from './buttons/clientButtons/defaultClient.vue';
 import defaultFreelancer from './buttons/freelancerButtons/defaultFreelancer.vue';
 import selectedClient from './buttons/clientButtons/selectedClient.vue';
 import selectedFreelancer from './buttons/freelancerButtons/selectedFreelancer.vue';
import { ref } from 'vue';
const client = ref(true);
const freelancer = ref(true);
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
  <main>
    <contactTitle />
    <questionsHelp />
    <helpCentral />
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
  </div>
  </main>
</template>
<style scoped>
  @import '@/assets/Sass/help/contact/_contactPage.scss';
</style>