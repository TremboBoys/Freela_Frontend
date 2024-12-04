<script setup>
import { ref, onMounted } from 'vue';
import { useRegisterProjectStore } from '@/stores/project/register-project';
import { useRouter } from 'vue-router';

const useRegisterProject = useRegisterProjectStore();
const router = useRouter();

const radioInput = ref(false);

onMounted(() => {
    useRegisterProject.restartPrevent();
})
</script>

<template>
    <div class="container">
        <div class="header-size">
            <h1>Cadastre seu projeto</h1>
            <p class="sub-title">Últimos ajustes...</p>
        </div>
        <div class="main-size">
            <p>Qual o nível de experiência que você busca?</p>
            <div class="options-size">
                <button type="button" :class="(useRegisterProject.registerProject.experience_level == 1) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.experience_level = 1">Iniciante</button>
                <button type="button" :class="(useRegisterProject.registerProject.experience_level == 2) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.experience_level = 2">Intermediário</button>
                <button type="button" :class="(useRegisterProject.registerProject.experience_level == 3) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.experience_level = 3">Experiente</button>
                <button type="button" :class="(useRegisterProject.registerProject.experience_level == 4) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.experience_level = 4">Especialista</button>
            </div>
            <p>Qual o tamanho do projeto?</p>
            <div class="options-size">
                <div class="options-size">
                <button type="button" :class="(useRegisterProject.registerProject.project_size == 1) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.project_size = 1">Pequeno</button>
                <button type="button" :class="(useRegisterProject.registerProject.project_size == 2) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.project_size = 2">Intermediário</button>
                <button type="button" :class="(useRegisterProject.registerProject.project_size == 3) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.project_size = 3">Grande</button>
                <button type="button" :class="(useRegisterProject.registerProject.project_size == 4) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.project_size = 4">Gigante</button>
            </div>
            </div>
            <p>Qual o orçamento que você deseja pagar?</p>
            <div class="options-size">
                <div class="options-size">
                <button type="button" :class="(useRegisterProject.registerProject.budget_range == 1) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.budget_range = 1">R$100 - 1.000</button>
                <button type="button" :class="(useRegisterProject.registerProject.budget_range == 2) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.budget_range = 2">R$1.000 - 5.000</button>
                <button type="button" :class="(useRegisterProject.registerProject.budget_range == 3) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.budget_range = 3">R$5.000 - 10.000</button>
                <button type="button" :class="(useRegisterProject.registerProject.budget_range == 4) ? 'option-chose' : 'option-size'" @click="useRegisterProject.registerProject.budget_range = 4">Mais de R$10.000</button>
            </div>
            </div>
            <p>Você tem um prazo de entrega?</p>
            <div class="entrega">
                <label class="custom-checkbox">
                    <span class="checkmark">
                        <input type="radio" ref="radioInput" @click="useRegisterProject.states.haveDateDelivery = true" name="" id="">
                    </span>
                </label>
                <p>Tenho um prazo de entrega</p>
                <input :disabled="(useRegisterProject.states.haveDateDelivery ? false : true)" v-model="useRegisterProject.registerProject.delivery" class="date" type="date" name="" id="">
            </div>
        </div>
        <div class="footer-size">
            <div class="footer-barra-description-verde">

            </div>
            <div class="footer-barra-description-verde2">

            </div>
            <div class="footer-barra-description-verde2">

            </div>
            <div class="footer-barra-description-final">
                    
            </div>
        </div>

        <div class="bottom">
            <button class="return-button" @click="router.push('/register-project/types')"><img src="@/assets/images/arrow-left.png" alt="">Voltar</button>
            <button @click="useRegisterProject.createProject()">Continuar</button>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_size-project-registration.scss';
</style>