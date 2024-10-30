<script setup>
import { FormSignUp, LoadSpinner } from '@/components/';
import { useSignUpStore } from '@/stores/auth/signUp';

const useSignUp = useSignUpStore();
</script>
<template>
    <div class="container-main">    
        <div class="container-form">
            <header>
                <RouterLink to="/">
                    <img src="@/assets/images/logo/tasker-logo-white.png" alt="">
                </RouterLink>
            </header>
            <main>
                <FormSignUp v-if="useSignUp.state.isLoading === false" />
                <LoadSpinner v-else />
            </main>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/signUp/_SignUp.scss';
@import '@/assets/Sass/signUp/tailwind.css';
</style>