<script setup>
import SignInButton from '../../components/signIn/SignInButton.vue'
import SignInIcons from '../../components/signIn/SignInIcons.vue'
import SignInInputs from '@/components/signIn/SignInInputs.vue'
import SignInIntro from '@/components/signIn/SignInIntro.vue'
import SignCreateAccount from '@/components/signIn/SignCreateAccount.vue'
</script>

<template>
  <div class="signIn-container">
    <div class="left-side">
      <img src="../../assets/images/workana-white-logo.png" alt="" />
      <div class="login-container">
        <SignInIntro />
        <div class="inputs-container">
          <SignInInputs />
          <SignCreateAccount/>
          <SignInButton />
          <SignInIcons />
        </div>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/signIn/_signIn.scss';
</style>
