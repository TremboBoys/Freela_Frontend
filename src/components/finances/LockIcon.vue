<script setup>
import { ref, computed } from "vue";

const showGoldenLock = ref(false);

const whichPadLockImageToUse = computed(() => {
    return (showGoldenLock.value) ? new URL('@/assets/images/finances/lock-golden.png', import.meta.url).href : new URL('@/assets/images/finances/lock.png', import.meta.url).href 
});

function showGoldenLockImage() {
    const lock = document.getElementById("lock");
    lock.classList.remove("show");
    lock.classList.add("hidden");
    setTimeout(() => {
        const goldenLock = document.getElementById("goldenLock");
        goldenLock.classList.remove("hidden");
        goldenLock.classList.add("show");
    });
};

function hiddenGoldenLockImage() {
    const goldenLock = document.getElementById("goldenLock");
    goldenLock.classList.remove("show");
    goldenLock.classList.add("hidden");
    setTimeout(() => {
        const lock = document.getElementById("lock");
        lock.classList.remove("hidden");
        lock.classList.add("show");
    });
};
</script>

<template>
  <div class="container-lock-icon">
    <img ref="lockRef" src="@/assets/images/finances/lock.png" :class="(showGoldenLock == false) ? 'show' : 'hidden'" @mouseenter="showGoldenLockImage" id="lock" alt="">
    <img ref="lockGoldenRef" src="@/assets/images/finances/lock-golden.png" :class="(showGoldenLock == false) ? 'hidden' : 'show'" @mouseleave="hiddenGoldenLockImage" id="goldenLock" alt="">
  </div>
</template>

<style scoped>
@import '@/assets/Sass/finances/_lockIcon.scss';
</style>