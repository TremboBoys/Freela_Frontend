<script setup>
import { onMounted } from 'vue';
import { useRegisterProjectStore } from '@/stores/project/register-project';
import { useRouter } from 'vue-router';

const useRegisterProject = useRegisterProjectStore();
const router = useRouter();

onMounted(() => {
    useRegisterProject.restartPrevent();
});
</script>

<template>
    <div class="container">
        <h1 class="cadastro">Cadastre seu projeto</h1>
        <div class="main-option">
            <p>Quais demandas o freelancer irá precisar desenvolver?</p>
            <div class="options">
                <div class="option">
                    <input type="radio" required value="1" v-model="useRegisterProject.registerProject.function" />
                    <label>
                        Web Design
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="2" v-model="useRegisterProject.registerProject.function" />
                    <label>
                        Design mobile
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="3" v-model="useRegisterProject.registerProject.function" />
                    <label>
                        Gerente
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="4" v-model="useRegisterProject.registerProject.function" />
                    <label>
                        Outro
                    </label>
                </div>
            </div>
            <p>Qual o nível de desenvolvimento você se encontra?</p>
            <div class="options">
                <div class="option">
                    <input type="radio" required value="3" v-model="useRegisterProject.registerProject.development_level" />
                    <label>
                        Eu tenho o design
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="2" v-model="useRegisterProject.registerProject.development_level" />
                    <label>
                        Eu tenho uma ideia
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="1" v-model="useRegisterProject.registerProject.development_level" />
                    <label>
                        Não tenho nada
                    </label>
                </div>
            </div>
            <p>Você precisa de um recurso especial?</p>
            <div class="options">
                <div class="option">
                    <input type="radio" required value="1" v-model="useRegisterProject.registerProject.special_resource" />
                    <label>
                        Sim, bibliotecas
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="2" v-model="useRegisterProject.registerProject.special_resource" />
                    <label>
                        Talvez
                    </label>
                </div>
                <div class="option">
                    <input type="radio" required value="3" v-model="useRegisterProject.registerProject.special_resource" />
                    <label>
                        Não
                    </label>
                </div>
            </div>
            <div class="footer-types">
                <div class="footer-barra-description-verde">
                </div>
                <div class="footer-barra-description-verde2">
                </div>
                <div class="footer-barra-description">
                </div>
                <div class="footer-barra-description-final">
            
                </div>
            </div>
                
            <div class="container-submit">
                <button class="return-button" @click="router.push('/register-project/description')"><img src="@/assets/images/arrow-left.png" alt="">Voltar</button>
                <button type="submit" @click="(useRegisterProject.canNextPage('size')) ? router.push('/register-project/size') : ''">Continuar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_types-project-registration.scss';
</style>