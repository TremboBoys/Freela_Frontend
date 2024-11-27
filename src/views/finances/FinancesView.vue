<script setup>
import GraphFinance from '@/components/finances/GraphFinance.vue';
import TextLeft from '@/components/finances/TextLeft.vue';
import LockIcon from '@/components/finances/LockIcon.vue';
import PopUpMp from '@/components/finances/PopUpMp.vue';
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
  <!-- <div class="lock">
    <LockIcon />
  </div> -->
  <div class="popUpMp">
    <PopUpMp />
  </div>
</template>
<style scoped>
@import '@/assets/Sass/finances/_finances.scss';
</style>