<script setup>

import SignInButton from '../../components/signIn/button.vue'
import Icons from '../../components/signIn/icons.vue'
import Inputs from '@/components/signIn/inputs.vue'
import Intro from '@/components/signIn/intro.vue'
import CreateAccount from '@/components/signIn/createAccount.vue'
import forgetPassword from './forgetPassword.vue'

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
