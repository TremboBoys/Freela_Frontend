<script setup>
import GraphFinance from '@/components/finances/GraphFinance.vue';
import TextLeft from '@/components/finances/TextLeft.vue';
</script>
<template>
  <div class="container">
    <div class="left">
      <TextLeft />
    </div>
    <div class="right">
      <GraphFinance />
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/Sass/finances/_finances.scss';
</style>