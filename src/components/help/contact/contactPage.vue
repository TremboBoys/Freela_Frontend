<script setup>
import contactTitle from './contactTitle.vue'
import questionsHelp from './questionsHelp.vue'
import helpCentral from './helpCentral.vue'
import profileSections from './profileSections.vue'
import utilityLinks from './utilityLinks.vue'
</script>
<template>
  <main>
    <div class="help-questions">
      <contactTitle />
      <questionsHelp />
      <helpCentral />
      <profileSections />
    </div>
    <utilityLinks />
  </main>
</template>
<style scoped lang="scss">
@import '@/assets/Sass/help/contact/_contactPage.scss';
</style>
