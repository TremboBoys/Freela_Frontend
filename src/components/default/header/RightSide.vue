<script setup>
import { ref } from 'vue';
import HeaderIcons from './HeaderIcons.vue';

import HamburgerButton from './HamburgerButton.vue';
import ListSmallScreens from './ListSmallScreens.vue';

const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function closeMenu() {
  isActive.value = !isActive.value;
}

</script>

<template>
    <div class="header-rightSide">
        <div class="icons">
            <HeaderIcons/>
            <ListSmallScreens @click="closeMenu" :isActive="isActive"/>
            <HamburgerButton @toggle="toggleMenu" />
        </div>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_rightSide.scss';
</style>