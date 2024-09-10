<script setup>
import SignInButton from '../../components/signIn/button.vue'
import Icons from '../../components/signIn/icons.vue'
import Inputs from '@/components/signIn/inputs.vue'
import Intro from '@/components/signIn/intro.vue'
import CreateAccount from '@/components/signIn/createAccount.vue'
</script>

<template>
  <div class="signIn-container">
    <div class="left-side">
      <img src="../../assets/images/workana-white-logo.png" alt="" />
      <div class="login-container">
        <SignInIntro />
        <div class="inputs-container">
          <Intro/>
          <Inputs />
          <CreateAccount/>
          <SignInButton/>
          <Icons />
        </div>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/signIn/_signIn.scss';
</style>
