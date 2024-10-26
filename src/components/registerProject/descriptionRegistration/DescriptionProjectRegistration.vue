<script setup>
</script>

<template>
    <div class="container">
        <div class="container-description">
            <h1 class="cadastro">
                Cadastre seu projeto
            </h1>
            <div class="header-description">
                <p>Título do projeto</p>
                <input type="text" class="text-description">
            </div>
            <div class="main-description">
                <p>Descrição do projeto</p>
                <textarea class="text-description">
                </textarea>
            </div>
            <div class="main-description">
                <p>Contexto geral do projeto</p>
                <textarea class="text-description2">
                </textarea>
            </div>
            <div class="footer-description">
                <div class="footer-barra-description-verde"></div>
                <div class="footer-barra-description"></div>
                <div class="footer-barra-description"></div>
                <div class="footer-barra-description-final"></div>
            </div>
            <RouterLink to="/register-project/types" class="router-link">
                <button class="continue">Continuar</button>
            </RouterLink>
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