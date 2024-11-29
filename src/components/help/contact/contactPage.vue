<script setup>
 import contactTitle from './contactTitle.vue';
 import questionsHelp from './questionsHelp.vue';
 import helpCentral from './helpCentral.vue';
 import profileSections from './profileSections.vue';
</script>
<template>
  <main>
    <div class="help-questions">
      <contactTitle />
      <questionsHelp />
      <helpCentral />
      <profileSections />
    </div>
    <div class="links">
      <h1>Links</h1>
    </div>
  </main>
</template>
<style scoped>
  @import '@/assets/Sass/help/contact/_contactPage.scss';
 .links {
    background-color: yellow;
    width: 20%;
    border: 1px solid black;
    margin-right: 5%;
    margin-bottom: 10vh;
    position: absolute;
    right: 0;
  }
</style>