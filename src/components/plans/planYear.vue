<script setup>
    import buttonYear from './buttons/buttonYear.vue';
</script>
<template>
    <div class="plan3">
            <div class="image-title">
                <div class="image"><img src="@/assets/images/Medieval-Crown.png" alt=""></div>
                <div class="title"><p class="text-title">Anual</p></div>
            </div>
            <div class="benefits-list">
                <ul>
                    <li class="benefit"><span class="decoration">●</span>Propostas a qualquer momento</li>
                    <li class="benefit"><span class="decoration">●</span>5 Projetos por vez</li>
                    <li class="benefit"><span class="decoration">●</span>Propostas personalizadas</li>
                    <li class="benefit"><span class="decoration">●</span>5 Projetos cadastrados por vez</li>
                    <li class="benefit"><span class="decoration">●</span>3 Testes de competência por semana</li>
                    <li class="benefit"><span class="decoration">●</span>Insígnia PRO anual no perfil</li>
                    <li class="benefit"><span class="decoration">●</span>Destaque maior em propostas</li>
                    <li class="benefit"><span class="decoration">●</span>Destaque maior em projetos</li>
                    <li class="benefit"><span class="decoration">●</span>Pague 11, leve 12 meses</li>
                </ul>
            </div>
           <buttonYear />
        </div>
</template>
<style scoped>
    @import '@/assets/Sass/plans/_planYear.scss'
</style>