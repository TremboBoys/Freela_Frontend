<script setup>
</script>
<template>
    <div class="select">
        <div class="select-header-container">
            <div class="select-header">
                <p>Programador para desenvolvimento de aplicações web</p>
            </div>
            <div class="select-header2">
                <p>R$3.000</p>
            </div>
        </div>
        <div class="select-main-container">
            <div class="select-subTitle">
                <p>Publicado: há 10 horas</p>
                <p>Prazo de entrega: 30/09/2024</p>
            </div>
            <div class="select-text">
                <p>Seria uma empresa que vende mudanças residenciais e comerciais para todo o Brasil principalmente RJ e
                    SP a pessoa teria acesso a um numero de Whatsapp e iria tentar fechar essa mudança com o cliente
                    mostrando quais são nossas vantagens e tentando superar a concorrência. Com bônus de comissão por
                    venda</p>
            </div>
            <div class="select-bottom-container">
                <div class="select-bottom">
                    <p>Web Design</p>
                </div>
                <div class="select-bottom">
                    <p>Javascript</p>
                </div>
                <div class="select-bottom">
                    <p>CSS</p>
                </div>
            </div>
        </div>
        <div class="select-footer-container">
            <div class="select-footer-img">
                <img src="@/assets/images/perfil-project.png" alt="">
            </div>
            <div class="select-footer-descrition">
                <div class="p-container">
                    <p class="select-footer-text1">N. S. P.</p>
                    <p class="select-footer-text2">Ultima resposta: há 8 horas</p>
                </div>
                <div class="select-footer-images">
                    <img src="@/assets/images/stars-project.png" alt="">
                    <img src="@/assets/images/brasil-icon.png" alt="">
                </div>
            </div>
            <router-link to="/proposal" class="select-footer-proposal">
                <button class="select-footer-proposal">
                    <p>Aceitar Proposta</p>
                </button>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
@import '../../assets/Sass/project/_project.scss';
</style>