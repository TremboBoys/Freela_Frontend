<script setup>
import { useSignUpStore } from '@/stores/auth/signUp';

const props = defineProps({
    infos: Object
});

const useSignUp = useSignUpStore();
</script>
<template>
    <div class="inputBox">
        <input type="password" class="form-control" :id="props.infos.id" aria-describedby="namedHelp" placeholder=" " v-model="useSignUp.user[props.infos.id]" required />
        <label class="labelInput" :for="infos.id"> {{ props.infos.label }}</label>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/signIn/_signIn-inputs.scss';
</style>
