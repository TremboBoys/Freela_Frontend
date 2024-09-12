<script setup>
    defineProps({
        infos: Object
    });
</script>
<template>
    <div class="inputBox">
        <input type="email" class="form-control" id=emailId aria-describedby="nameHelp" placeholder=" " />
        <label class="labelInput" for=emailId>{{ infos.label }}</label>
    </div>
</template>
<style scoped></style>
