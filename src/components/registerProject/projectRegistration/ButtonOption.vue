<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRegisterProjectStore } from '@/stores/project/register-project';

const props = defineProps(['text', 'uuid']);
const useRegisterProject = useRegisterProjectStore();
const buttonRef = ref(null);

onMounted(() => {
    console.log(buttonRef.value);
})

watch(() => useRegisterProject.registerProject.theme, () => {
    if (useRegisterProject.states.uuidThemeSelected == props.uuid) {
        buttonRef.value.classList.add("option-chose");
        buttonRef.value.classList.remove("option");
    } else {
        buttonRef.value.classList.add("option");
        buttonRef.value.classList.remove("option-chose");
    }
})
</script>

<template>
    <button ref="buttonRef" @click="useRegisterProject.assignTheme(props.text, props.uuid)" class="option" :id="props.uuid">
        <p>{{ props.text }}</p>
    </button>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>