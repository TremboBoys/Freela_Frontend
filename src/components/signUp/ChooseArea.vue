<script setup>
import { ref } from "vue";
import { useInfoPopUpStore } from "@/stores/perfil/infoPopUpPerfil";

const useInfoPopUp = useInfoPopUpStore();
const selectRef = ref(null);

function addStyleSelect() {
    selectRef.value.classList.toggle('select-border-radius');
}

function removeStyleSelect() {
    selectRef.value.classList.toggle('select-border-radius');
};
</script>

<template>
    <h1 class="title">Para finalizar seu cadastro nos conte mais sobre você</h1>
    <h2 class="question">Em que área você pensa em trabalhar?</h2>

    <div class="container-sticker">
        <img src="@/assets/images/signUp/work-area.png" class="sticker">
    </div>

    <div class="container-selects">
        <div class="container-select">
            <label>Selecione sua área</label>
            <select ref="selectRef" @focus="addStyleSelect" @blur="removeStyleSelect">
                <option value="1">Desenvolvedor Web</option>
                <option value="2">Data Science</option>
                <option value="3">Machine Learning</option>
            </select>
            <img src="@/assets/images/signUp/down-arrow.png" class="arrow">
        </div>
        <div class="container-select">
            <label>Selecione sua sub-área</label>
            <select ref="selectRef" @focus="addStyleSelect" @blur="removeStyleSelect">
                <option value="1">Frontend</option>
                <option value="2">Backend</option>
                <option value="3">Mobile</option>
            </select>
            <img src="@/assets/images/signUp/down-arrow.png" class="arrow">
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/signUp/_chooseArea.scss';
</style>