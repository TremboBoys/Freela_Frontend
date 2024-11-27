<script setup>
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
     <div class="client-help">
        <div class="number-title">
            <div class="number">
                <p>2</p>
            </div>
            <p class="title">
                opcoes de ajuda
            </p>
        </div>
     </div>
  </div>
  
</template>
<style scoped lang="scss">
@import '@/assets/Sass/help/contact/_profileSection.scss';
.client-help {
    width: 100%;
    border: 1px solid #646464;
    margin-top: 3vh;
    border-radius: 12px;
.number-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 2vw;
    width: 30%;
    .number{
        background-color: #F2F2F2;
        border: #646464 1.6px solid;
        border-radius: 50%;
        width: 3.5vw;
        height: 3.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            font-size: 1.6vw;
            font-weight: bold;
            color: #646464;
        }
    }
    p{
        font-size: 1.2vw;
        font-weight: bold;
        color: #646464;
    }
}
}
</style>