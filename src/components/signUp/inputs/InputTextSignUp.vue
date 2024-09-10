<script setup>
    defineProps(['name', 'user']);
    const nameId = 'name';
    const userId = 'user';
</script>
<template>
    <div class="inputBox">
        <input type="text" class="form-control" :id=nameId aria-describedby="nameHelp" placeholder=" " />
        <label class="labelInput" :for=nameId> {{ name }}</label>
    </div>
    <div class="inputBox">
        <input type="text" class="form-control" :id=userId aria-describedby="nameHelp" placeholder=" " />
        <label class="labelInput" :for=userId> {{ user }}</label>
    </div>
</template>
<style scoped></style>