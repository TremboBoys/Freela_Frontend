<script setup>
import { useSignUpStore } from '@/stores/auth/signUp';

const props = defineProps({
    infos: Object
});

const useSignUp = useSignUpStore();
</script>
<template>
    <div class="inputBox">
        <input type="email" class="form-control" :id="props.infos.id" aria-describedby="nameHelp" placeholder=" " v-model="useSignUp.user.email" required />
        <label class="labelInput" for=emailId>{{ props.infos.label }}</label>
    </div>
</template>
<style scoped></style>
