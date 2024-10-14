
<script setup>
 import contactTitle from './contactTitle.vue';
 import questionsHelp from './questionsHelp.vue';
</script>
<template>
  <main>
    <contactTitle />
    <questionsHelp />
    <div class="help-central">
      <div class="help-title"><p>Central de ajuda</p></div>
      <div class="instructions">
        <div class="instruction">
          <div class="number"><p>1</p></div>
          <div class="text"><p>Selecione seu perfil de consulta</p></div>
        </div>
        <div class="instruction">
          <div class="number"><p>2</p></div>
          <div class="text"><p>Indique sua consulta no painel de ajuda</p></div>
        </div>
        <div class="instruction">
          <div class="number"><p>3</p></div>
          <div class="text"><p>Solução disponível para sua consulta</p></div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
  @import '@/assets/Sass/help/contact/_contactPage.scss';
</style>