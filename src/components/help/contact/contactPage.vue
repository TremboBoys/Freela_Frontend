<script setup>
 import contactTitle from './contactTitle.vue';
 import questionsHelp from './questionsHelp.vue';
 import helpCentral from './helpCentral.vue';
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
        <button class="client">
          <p>Sou Cliente</p>
        </button>
        <button class="freelancer">
          <p>Sou Freelancer</p>
        </button>
     </div>
  </div>
  </main>
</template>
<style scoped>
  @import '@/assets/Sass/help/contact/_contactPage.scss';
</style>