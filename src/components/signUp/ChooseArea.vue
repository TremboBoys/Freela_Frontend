<script setup>
import { ref, computed, watch } from "vue";
import { useInfoPopUpStore } from "@/stores/perfil/infoPopUpPerfil";
import { usePerfilStore } from "@/stores/perfil/perfil";

const useInfoPopUp = useInfoPopUpStore();
const usePerfil = usePerfilStore();
const continueRef = ref(null);
const emit = defineEmits(['continueSignUp']);

const allowContinue = computed(() => {
    return (usePerfil.perfil.area !== 'Selecione sua área' && usePerfil.perfil.sub_area !== 'Selecione sua sub-area') ? true : false
});

watch(() => [usePerfil.perfil.area, usePerfil.perfil.sub_area, usePerfil.perfil.nacionality], () => {
    if (usePerfil.perfil.area !== 'Selecione sua área' && usePerfil.perfil.sub_area !== 'Selecione sua sub-area' && usePerfil.perfil.nacionality !== 'Selecione sua nacionalidade') {
        continueRef.value.classList.add('activeContinue');
    } else {
        if (continueRef.value.classList.contains('activeContinue')) {
            continueRef.value.classList.remove('activeContinue');
        }
    }
});

// function addStyleSelect() {
//     console.log('Função chamada!');
//     selectRef1.value.classList.add('select-border-radius');
//     selectRef2.value.classList.add('select-border-radius');
// }

// function removeStyleSelect() {
//     console.log('Função2 chamada!');
//     selectRef1.value.classList.remove('select-border-radius');
//     selectRef2.value.classList.remove('select-border-radius');
// };
</script>

<template>
    <h1 class="title">Para finalizar seu cadastro nos conte mais sobre você</h1>
    <h2 class="question">Em que área você pensa em trabalhar?</h2>

    <div class="container-sticker">
        <img src="@/assets/images/signUp/work-area.png" class="sticker">
    </div>

    <div class="container-selects">
        <div class="container-inputs-top">
            <div class="container-select">
                <label>Selecione sua área</label>
                <select v-model="usePerfil.perfil.area">
                    <option disabled>Selecione sua área</option>
                    <option v-for="(area, index) in useInfoPopUp.areas" :key="index" :value="area.id">{{ area.name }}</option>
                </select>
                <img src="@/assets/images/signUp/down-arrow.png" class="arrow">
            </div>
            <div class="container-select" v-if="usePerfil.perfil.area !== 'Selecione sua área'">
                <label> Selecione sua sub-área </label>
                <select v-model="usePerfil.perfil.sub_area">
                    <option disabled>Selecione sua sub-area</option>
                    <option v-for="(subArea, index) in useInfoPopUp.subAreas" :key="index" :value="subArea.id">{{ subArea.name }}</option>
                </select>
                <img src="@/assets/images/signUp/down-arrow.png" class="arrow">
            </div>
            <div class="container-continue">
                <button ref="continueRef" class="continue" @click="(allowContinue) ? emit('continueSignUp', 'stepChooseArea', 'stepInputs') : ''">Continue <img class="next" src="@/assets/images/signUp/next.png">
                </button>
            </div>
        </div>
        <div class="container-inputs-bottom">
            <div class="container-select" v-if="usePerfil.perfil.sub_area !== 'Selecione sua sub-area'">
                <label>Selecione sua nacionalidade</label>
                <select v-model="usePerfil.perfil.nacionality">
                    <option disabled>Selecione sua nacionalidade</option>
                    <option v-for="(nacionality, index) in useInfoPopUp.nacionalities" :key="index" :value="nacionality.id">{{ nacionality.name }}</option>
                </select>
                <img src="@/assets/images/signUp/down-arrow.png" class="arrow">
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/signUp/_chooseArea.scss';
</style>