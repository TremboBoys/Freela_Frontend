<script setup>
import SignUpIcons from './SignUpIcons.vue';
import SignUpButton from './SignUpButton.vue';
import SignUpLogin from './SignUpLogin.vue';
import SignUpInputs from './SignUpInputs.vue';
</script>
<template>
    <div class="containerForm">    
        <header>
            <RouterLink to="/">
                <img src="@/assets/images/workana-logo.png" alt="">
            </RouterLink>
        </header>
        <main>
            <div >
                
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
    </div>
</template>
<style scoped>
@import '../../assets/Sass/SignUp/_SignUp.scss';
@import '../../assets/tailwind.css';
</style>