<script setup>
import { ref } from 'vue';

const showContent = ref(false);

const toggleContent = () => {
    showContent.value = !showContent.value;
};
</script>

<template>
    <div class="links">
        <div class="box">
            <div class="title">
                <h1>Links Úteis</h1>
                <button @click="toggleContent">
                    <p><i :class="`fas fa-chevron-${showContent ? 'up' : 'down'}`"></i></p>
                </button>
            </div>
            <div class="support">
                <p>
                    Se você é um freelancer assinado a um Plano Premium, pode conversar com a gente de
                    segunda a sexta-feira, das 10am ás 12pm e 1pm ás 3pm (GMT-3).
                </p>
            </div>
            <div v-if="showContent" class="helps">
                <ul>
                    <li>Ajuda</li>
                    <li>Sobre Nós</li>
                    <li>Termos de Serviço</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>
            <div v-if="showContent" class="social">
                <span><i class="fab fa-github"></i></span>
                <span><i class="fab fa-instagram"></i></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
 @import "@/assets/Sass/help/contact/utilityLinks.scss";
</style>