<script setup>
    import buttonFree from './buttons/buttonFree.vue';
</script>
<template>
     <div class="plan1">
            <div class="image-title">
                <div class="image"><img src="@/assets/images/Crown.png" alt=""></div>
                <div class="title"><p class="text-title">Free</p></div>
            </div>
            <div class="benefits-list">
                <ul>
                    <li class="benefit"><span class="decoration">●</span>Propostas dentro de 12 horas</li>
                    <li class="benefit"><span class="decoration">●</span>2 Projetos por vez</li>
                    <li class="benefit"><span class="decoration">●</span>Propostas padrões</li>
                    <li class="benefit"><span class="decoration">●</span>1 Projeto cadastrado por vez</li>
                    <li class="benefit"><span class="decoration">●</span>1 Teste de competência por semana</li>
                </ul>
            </div>
            <buttonFree />
        </div>
</template>
<style scoped>
    @import '@/assets/Sass/plans/_planFree.scss';
</style>