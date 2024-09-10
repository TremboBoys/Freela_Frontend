<script setup>
    defineProps(['email']);
    const emailId = 'email';
</script>
<template>
    <div class="inputBox">
        <input type="email" class="form-control" :id=emailId aria-describedby="nameHelp" placeholder=" " />
        <label class="labelInput" :for=emailId>{{ email }}</label>
    </div>
</template>
<style scoped></style>
