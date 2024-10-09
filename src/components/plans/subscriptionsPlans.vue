<script setup></script>
<template>
    <div class="container">
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
            <div class="sign">
                <button id="button" class="border-animate">Já incluso</button>
            </div>
        </div>
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
            <div class="sign">
                <button>R$30,00 mês</button>
            </div>
        </div>
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
            <div class="sign">
                <button>R$25,00 mês</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">   
@import '../../assets/Sass/plans/_subscriptionPlans.scss';
</style>