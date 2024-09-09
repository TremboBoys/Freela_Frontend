<script setup>
import SignUpIcons from './SignUpIcons.vue';
import SignUpButton from './SignUpButton.vue';
import SignUpLogin from './SignUpLogin.vue';
import SignUpInputs from './SignUpInputs.vue';
</script>
<template>
    <main>
        <div class="containerForm">
            <header>
                <RouterLink to="/">
                    <img src="@/assets/images/workana-logo.png" alt="">
                </RouterLink>
            </header>
            <div class="signUp">
                <form>
                <SignUpInputs />
                <SignUpLogin />
                <SignUpButton />
            </form>
            <SignUpIcons />
            </div>
        </div>
    </main>
</template>
<style scoped>
@import '../../assets/Sass/SignUp/_SignUp.scss';
@import '../../assets/tailwind.css';
</style>