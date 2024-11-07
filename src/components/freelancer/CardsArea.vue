<script setup>
import FreelancerCard from './FreelancerCard.vue'
</script>

<template>
  <div class="cards-container">
    <h1>Freelancers na minha área</h1>
    <div class="cards">
      <FreelancerCard
        description="Sou Luiz Fernando, tenho 16 anos e sou estudante no Instituto Federal Catarinense (IFC) em Araquari, onde curso Técnico em Informática para Internet. Estou me dedicando a desenvolver habilidades em programação e tecnologia, explorando o mundo digital para construir soluções inovadoras e funcionais. Sou apaixonado por tecnologia e sempre busco aprimorar meus conhecimentos em novas linguagens e técnicas de desenvolvimento. Meu objetivo é crescer na área e fazer a diferença com soluções que impactem positivamente a vida das pessoas" name="Luiz Fernando" />
      
      <FreelancerCard name="Nicolas Steffens" />
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/freelancer/_cardsArea.scss';
</style>
