<script setup>
import { ref } from 'vue';

const faqCategories = ref([
  {
    title: 'Retiro de dinheiro / Não recebi meu pagamento',
    items: [
      'Como faço para sacar o dinheiro?',
      'Problemas ao efetuar pagamento',
      'Como posso pagar um projeto por horas?',
    ],
  },
  {
    title: 'Quero cancelar o projeto / O cliente não responde',
    items: [
      'Como cancelo o pagamento?',
      'Como cancelo o projeto?',
      'Como posso pedir reembolso?',
    ],
  },
  {
    title: 'Tenho propostas suspensas ou conta suspensa',
    items: [
      'Como faço para cadastrar um projeto?',
      'Aceitei uma proposta. Qual o próximo o passo?',
      'Conselhos para aceitar uma proposta',
    ],
  },
  {
    title: 'Políticas do Tasker',
    items: [
      'Política do Tasker',
      'Termos e condições do Tasker',
      'Política de privacidade do Tasker',
    ],
  },
  {
    title: 'Moderação',
    items: [
      'Como pagar os projetos por hora?',
      'Como encerrar um projeto por hora',
      'Como funciona o projeto por hora?',
    ],
  },
  {
    title: 'Outros assuntosz',
    items: [
      'O que são os planos de assinatura?',
      'Outras perguntas / Entre em contato',
      'Como faço para cancelar minha conta?',
    ],
  },
]);

const expandedCategory = ref(null);

function toggleCategory(index) {
  expandedCategory.value = expandedCategory.value === index ? null : index;
}
</script>

<template>
  <div class="client-help">
    <div class="number-title">
      <div class="number">
        <p>2</p>
      </div>
      <p class="title">Opções de ajuda</p>
    </div>
    <div class="options">
      <ul>
        <li v-for="(category, index) in faqCategories" :key="index" class="faq-category">
          <div class="faq-container">
            <button class="faq-button" @click="toggleCategory(index)">
              <p>{{ expandedCategory === index ? '-' : '+' }}</p>
            </button>
            <div>
              <p class="faq-title">{{ category.title }}</p>
              <ul v-if="expandedCategory === index" class="faq-list">
                <li v-for="item in category.items" :key="item" class="faq-item">{{ item }} <img class="icon" src="@/assets/images/linkIcon.png" alt=""></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/Sass/help/contact/_clientHelp.scss';
</style>
