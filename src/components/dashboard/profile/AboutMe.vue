<script setup>
const props = defineProps(['about']);
</script>

<template>
    <div class="container-about">
        <p class="aboutMe">Sobre mim</p>
        <div class="text">
            <span>{{ props.about !== '' ? props.about : 'Mostre para as pessoas, um pouco de quem você é.'}}
                <router-link to="/configurations/">
                        <img src="@/assets/images/dashboard/pencil-blue.png" alt="">
                </router-link>
            </span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_aboutMe.scss';
</style>