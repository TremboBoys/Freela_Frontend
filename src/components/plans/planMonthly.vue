<script setup>
    import buttonMonthly from './buttons/buttonMonthly.vue';
</script>
<template>
    <div class="plan2">
            <div class="image-title">
                <div class="image"><img src="@/assets/images/Queen-Crown.png" alt=""></div>
                <div class="title"><p class="text-title">Mensal</p></div>
        </div>
            <div class="benefits-list">
                <ul>
                    <li class="benefit"><span class="decoration">●</span>Propostas a qualquer momento</li>
                    <li class="benefit"><span class="decoration">●</span>5 Projetos por vez</li>
                    <li class="benefit"><span class="decoration">●</span>Propostas personalizadas</li>
                    <li class="benefit"><span class="decoration">●</span>5 Projetos cadastrados por vez</li>
                    <li class="benefit"><span class="decoration">●</span>3 Testes de competência por semana</li>
                    <li class="benefit"><span class="decoration">●</span>Insígnia PRO mensal no perfil</li>
                    <li class="benefit"><span class="decoration">●</span>Destaque em propostas</li>
                    <li class="benefit"><span class="decoration">●</span>Destaque em projetos</li>
                </ul>
            </div>
           <buttonMonthly />
        </div>
</template>
<style scoped>
    @import '@/assets/Sass/plans/_planMonthly.scss'
</style>