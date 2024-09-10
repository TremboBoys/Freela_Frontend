<script setup>
    defineProps(['password', 'confirmPassword']);
    const passwordId = 'password';
</script>
<template>
    <div class="inputBox">
        <input type="password" class="form-control" :id=passwordId aria-describedby="namedHelp" placeholder=" " />
        <label class="labelInput" :for=passwordId> {{ password }}</label>
    </div>
    <div class="inputBox">
        <input type="password" class="form-control" :id=passwordId aria-describedby="nameHelp" placeholder=" " />
        <label class="labelInput" :for=passwordId> {{ confirmPassword }}</label>
    </div>
</template>
<style scoped></style>
