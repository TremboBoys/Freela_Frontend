<script setup>
import { useAuthStore } from '@/stores/auth/auth';

const useAuth = useAuthStore();
</script>

<template>
    <div class="form-group inputBox">
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" " v-model="useAuth.user.email" />
      <label class="email labelInput" for="email">Email</label>
    </div>
</template>

<style scoped>
@import '../../assets/Sass/signIn/_signIn-inputs.scss';
</style>