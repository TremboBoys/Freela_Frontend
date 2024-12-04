<script setup>
import { onMounted } from 'vue';
import { useRegisterProjectStore } from '@/stores/project/register-project';
import { useRouter } from 'vue-router';
import { countCharacters } from "@/utils/countCharacters";

const useRegisterProject = useRegisterProjectStore();
const router = useRouter();

onMounted(() => {
    useRegisterProject.restartPrevent();
})
</script>

<template>
    <div class="container">
        <div class="container-description">
            <h1 class="cadastro">
                Cadastre seu projeto
            </h1>
            <form @submit.prevent="router.push('/register-project/types')">
                <div class="header-description">
                    <p>Título do projeto</p>
                    <input type="text" v-model="useRegisterProject.registerProject.title" class="text-description" required>
                </div>
                <div class="main-description">
                    <p>Descrição do projeto</p>
                    <textarea required maxlength="255" v-model="useRegisterProject.registerProject.description" @focus="useRegisterProject.states.numberCharacters = countCharacters(useRegisterProject.registerProject.description); useRegisterProject.states.currentInput = 'description'" @blur="useRegisterProject.states.currentInput = ''" @input="useRegisterProject.states.numberCharacters = countCharacters(useRegisterProject.registerProject.description)" class="text-description">
                    </textarea>
                    <div :style="(useRegisterProject.states.currentInput == 'description') ? 'visibility: visible;' : 'visibility: hidden;'" class="container-count-characters"><span :class="(useRegisterProject.states.numberCharacters == 255) ? 'limitCharacters limit' : 'limitCharacters'">{{ useRegisterProject.states.numberCharacters }} / 255</span></div>
                </div>
                <div class="main-description">
                    <p>Contexto geral do projeto</p>
                    <textarea required maxlength="255" v-model="useRegisterProject.registerProject.context" @focus="useRegisterProject.states.numberCharacters = countCharacters(useRegisterProject.registerProject.context); useRegisterProject.states.currentInput = 'context'" @blur="useRegisterProject.states.currentInput = ''" @input="useRegisterProject.states.numberCharacters = countCharacters(useRegisterProject.registerProject.context)" class="text-description2">
                    </textarea>
                    <div :style="(useRegisterProject.states.currentInput == 'context') ? 'visibility: visible;' : 'visibility: hidden;'" class="container-count-characters"><span :class="(useRegisterProject.states.numberCharacters == 255) ? 'limitCharacters limit' : 'limitCharacters'">{{ useRegisterProject.states.numberCharacters }} / 255</span></div>
                </div>
                <div class="footer-description">
                    <div class="footer-barra-description-verde"></div>
                    <div class="footer-barra-description"></div>
                    <div class="footer-barra-description"></div>
                    <div class="footer-barra-description-final"></div>
                </div>
                <div class="container-submit">
                    <button class="return-button" @click="router.push('/register-project/')"><img src="@/assets/images/arrow-left.png" alt="">Voltar</button>
                    <button type="submit" class="continue">Continuar</button>
                </div>
            </form>
        </div>
        <div class="box-notice">
            <img src="../../../assets/images/alert-circle.png" alt="">
            <p>Diga ao freelancer o objetivo do seu projeto. Adicione sites de referência</p>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_description-project-registration.scss';
</style>