<script setup>
import { FormSignUp } from '@/components/';
</script>
<template>
    <div class="containerForm">    
        <header>
            <RouterLink to="/">
                <img src="@/assets/images/logo/tasker-logo-white.png" alt="">
            </RouterLink>
        </header>
        <main>
            <FormSignUp />
        </main>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/signUp/_SignUp.scss';
@import '@/assets/Sass/signUp/tailwind.css';
</style>