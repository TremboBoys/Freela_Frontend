<script setup>
import '@passageidentity/passage-elements/passage-register'
const appId = import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID;
console.log(appId)
</script>

<template>
  <div>
    <passage-register :app-id="appId"></passage-register>
  </div>
</template>

<style scoped>
</style>