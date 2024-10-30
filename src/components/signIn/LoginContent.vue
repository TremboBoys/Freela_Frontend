<script setup>
import SignInButton from '@/components/signIn/ButtonSignIn.vue'
import Icons from '@/components/signIn/IconsSignIn.vue'
import Inputs from '@/components/signIn/InputEmailSignIn.vue'
import Intro from '@/components/signIn/IntroSignIn.vue'
import CreateAccount from '@/components/signIn/CreateAccountSignUp.vue'
import ForgetPassword from '@/components/signIn/ForgetPasswordSignIn.vue'
</script>

<template>
  <div class="login-container">
    <SignInIntro />
    <form class="inputs-container" @submit.prevent="">
      <Intro />
      <Inputs />
      <forgetPassword/>
      <CreateAccount />
      <SignInButton />
      <Icons />
    </form>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/signIn/_loginContainer.scss';
</style>
