<script setup>

import FreelancerCard from './FreelancerCard.vue';

</script>

<template>
  <div class="cards-container">
    <h1>Freelancers na minha área</h1>
    <div class="cards">
        <FreelancerCard/>
        <FreelancerCard/>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/freelancer/_cardsArea.scss';
</style>
