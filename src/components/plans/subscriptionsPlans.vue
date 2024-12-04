<script setup></script>
<template>
  <div class="container">
    <div class="plan1">
      <div class="image-title">
        <div class="image"><img src="@/assets/images/Crown.png" alt="" /></div>
        <div class="title"><p class="text-title">Básico</p></div>
      </div>
      <div class="benefits-list">
        <h2>Benefícios</h2>
        <ul>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/black-check.png" alt=""></span>Realizar propostas dentro de 12 horas</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/black-check.png" alt=""></span>2 Freelancers por vez</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/black-check.png" alt=""></span>Propostas padrões</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/black-check.png" alt=""></span>1 Projeto cadastrado por vez</li>
          <li class="benefit">
            <span class="decoration"><img src="@/assets/images/black-check.png" alt=""></span>1 Teste de competência por semana
          </li>
        </ul>
      </div>
      <div class="sign">
        <button>Já incluso</button>
      </div>
    </div>
    <div class="plan2">
      <div class="image-title">
        <div class="image"><img src="@/assets/images/Queen-Crown.png" alt="" /></div>
        <div class="title"><p class="text-title">Mensal</p></div>
      </div>
      <div class="container-price">
        <div class="price">
          <h1>R$30,00</h1>
          <span>/mês*</span>
        </div>
        <div class="warning">
          <p>*Cobrado R$30,00 mensalmente</p>
        </div>
      </div>
      <div class="benefits-list">
        <h2>Benefícios</h2>
        <ul>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/check.png" alt=""></span>Realizar propostas a qualquer momento</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/check.png" alt=""></span>Sem limite de Freelancers</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/check.png" alt=""></span>Propostas personalizadas</li>
          <!-- <li class="benefit"><span class="decoration">●</span>5 Projetos cadastrados por vez</li> -->
          <li class="benefit">
            <span class="decoration"><img src="@/assets/images/check.png" alt=""></span>3 Testes de competência por semana
          </li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/check.png" alt=""></span>Insígnia PRO mensal no perfil</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/check.png" alt=""></span>Destaque em propostas</li>
          <li class="benefit"><span class="decoration"><img src="@/assets/images/check.png" alt=""></span>Destaque em projetos</li>
        </ul>
      </div>
      <div class="sign">
        <button>Assinar</button>
      </div>
    </div>
    <div class="plan3">
      <div class="image-title">
        <div class="image"><img src="@/assets/images/Medieval-Crown.png" alt="" /></div>
        <div class="title"><p class="text-title">Anual</p></div>
      </div>
      <div class="container-price">
        <p class="discount">De <span class="red-price">R$32,70</span> por apenas</p>  
        <div class="price">
          <h1>R$21,00</h1>
          <span>/mês*</span>
        </div>
        <div class="warning">
          <p>*Cobrança única de R$231,00 a cada 12 meses</p>
        </div>
        </div>
        <div class="benefits-list">
          <h2>Benefícios</h2>
          <ul>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Realizar propostas a qualquer momento</li>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Sem limite de Freelancers</li>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Propostas personalizadas</li>
            <span class="decoration"><!-- <li class="benefit"><img src="@/assets/images/gold-check.png" alt="">5 Projetos cadastrados por vez</li> --></span>
            <li class="benefit">
              <span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>3 Testes de competência por semana
            </li>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Insígnia PRO anual no perfil</li>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Destaque maior em propostas</li>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Destaque maior em projetos</li>
            <li class="benefit"><span class="decoration"><img src="@/assets/images/gold-check.png" alt=""></span>Pague 11, leve 12 meses</li>
          </ul>
        </div>
        <div class="sign">
          <button>Assinar</button>
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../assets/Sass/plans/_subscriptionPlans.scss';
@import '../../assets/Sass/plans/_subscriptionPlansResponsive.scss';
</style>
