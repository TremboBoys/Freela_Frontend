<script setup>
import '@passageidentity/passage-elements/passage-login';

const appId = import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID
</script>

<template>
  <div>
    <passage-login :app-id="appId"></passage-login>
  </div>
</template>

<style scoped>
</style>