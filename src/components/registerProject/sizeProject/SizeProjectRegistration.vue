<script setup>
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
                <div class="option-size">
                    <p>Iniciante</p>
                </div>
                <div class="option-size">
                    <p>Intermediário</p>
                </div>
                <div class="option-size">
                    <p>Experiente</p>
                </div>
                <div class="option-size">
                    <p>Especialista</p>
                </div>
            </div>
            <p>Qual o tamanho do projeto?</p>
            <div class="options-size">
                <div class="option-size">
                    <p>Pequeno</p>
                </div>
                <div class="option-size">
                    <p>Intermediário</p>
                </div>
                <div class="option-size">
                    <p>Grande</p>
                </div>
                <div class="option-size">
                    <p>Gigante</p>
                </div>
            </div>
            <p>Qual o orçamento que você deseja pagar?</p>
            <div class="options-size">
                <div class="option-size">
                    <p>R$100 - 1.000</p>
                </div>
                <div class="option-size">
                    <p>R$1.000 - 5.000</p>
                </div>
                <div class="option-size">
                    <p>R$5.000 - 10.000</p>
                </div>
                <div class="option-size">
                    <p>Mais de R$10.000</p>
                </div>
            </div>
            <div class="entrega">
                <label class="custom-checkbox">
                    <span class="checkmark">
                        <input type="radio" name="" id="">
                    </span>
                </label>
                <p>Tenho um prazo de entrega</p>
                <input class="date" type="date" name="" id="">
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_size-project-registration.scss';
</style>