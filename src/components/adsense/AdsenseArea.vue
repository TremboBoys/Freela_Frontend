<script setup>
import adImg from '@/components/adsense/adImg.vue'
import AdsenseTitle from '@/components/adsense/AdsenseTitle.vue'
import InputDesc from '@/components/adsense/InputDesc.vue'
</script>

<template>
    <div class="adsense-container">
        <AdsenseTitle/>
        <adImg/>
        <InputDesc/>

    </div>
</template>

<style>
@import '../../assets/Sass/adsense/_adsenseArea.scss';;
</style>