<script setup>
import SignInButton from '@/components/signIn/ButtonSignIn.vue'
import Icons from '@/components/signIn/IconsSignIn.vue'
import Inputs from '@/components/signIn/InputsSignIn.vue'
import Intro from '@/components/signIn/IntroSignIn.vue'
import CreateAccount from '@/components/signIn/CreateAccountSignUp.vue'
import ForgetPassword from '@/components/signIn/ForgetPasswordSignIn.vue'
</script>

<template>
  <div class="login-container">
    <SignInIntro />
    <div class="inputs-container">
      <Intro />
      <Inputs />
      <forgetPassword/>
      <CreateAccount />
      <SignInButton />
      <Icons />
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/signIn/_loginContainer.scss';
</style>
