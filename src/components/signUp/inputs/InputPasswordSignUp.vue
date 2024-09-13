<script setup>
    defineProps({
        infos: Object
    });
</script>
<template>
    <div class="inputBox">
        <input type="password" class="form-control" :id="infos.id" aria-describedby="namedHelp" placeholder=" " />
        <label class="labelInput" :for="infos.id"> {{ infos.label }}</label>
    </div>
</template>
<style scoped></style>
