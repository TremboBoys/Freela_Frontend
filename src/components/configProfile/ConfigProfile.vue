<script setup>
import SideBar from './SideBar.vue';
// import PersonalInformation from './personalInformation/PersonalInformation.vue';
</script>

<template>
    <div class="configProfile-container">
        <SideBar/>
        <RouterView/>
    </div>
</template>

<style scoped>
@import '../../assets/Sass/configProfile/_configProfile.scss';
.configProfile-container {
    padding-bottom: 0;
}
</style>