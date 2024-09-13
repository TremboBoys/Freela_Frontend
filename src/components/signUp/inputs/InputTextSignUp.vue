<script setup>
    defineProps({
        infos: Object
    });
</script>
<template>
    <div class="inputBox">
        <input type="text" class="form-control" :id="infos.id" aria-describedby="nameHelp" placeholder=" " />
        <label class="labelInput" :for="infos.id"> {{ infos.label }}</label>
    </div>
</template>
<style scoped></style>