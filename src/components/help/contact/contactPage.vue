<script setup>
 import contactTitle from './contactTitle.vue';
 import questionsHelp from './questionsHelp.vue';
 import helpCentral from './helpCentral.vue';
 import profileSections from './profileSections.vue';
</script>
<template>
  <main>
    <contactTitle />
    <questionsHelp />
    <helpCentral />
    <profileSections />
  </main>
</template>
<style scoped>
  @import '@/assets/Sass/help/contact/_contactPage.scss';
</style>