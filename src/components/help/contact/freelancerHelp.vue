<script setup>
import { ref } from 'vue';

const faqCategories = ref([
  {
    title: 'Retiro de dinheiro / Não recebi meu pagamento',
    items: [
      'Como faço para sacar o dinheiro?',
      'Quando recebo meu pagamento?',
      'Por que não recebi meu pagamento?',
      'Outras perguntas / Entre em contato',
    ],
  },
  {
    title: 'Quero cancelar o projeto / O cliente não responde',
    items: [
      'O que fazer quando o cliente não responde?',
      'Política de cancelamento',
      'Política de cancelamento de projeto por horas',
      'Outras perguntas / Entre em contato',
    ],
  },
  {
    title: 'Tenho propostas suspensas ou conta suspensa',
    items: [
        'Por que minhas propostas foram suspensas?',
        'Por que minha conta foi suspensa?',
        'Como faço para reativar minha conta?',
        'Outras perguntas / Entre em contato',
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
        'O que é moderação?',
        'Como funciona a moderação?',
        'Por que minha proposta foi rejeitada?',
        'Por que enviamos um código de confirmação no email?',
        'Outras perguntas / Entre em contato',
    ],
  },
  {
    title: 'Outros assuntos',
    items: [
      'O que são os planos de assinatura?',
      'Desejo mudar meu email',
      'Desejo mudar minha senha',
      'Como faço para cancelar minha conta?',
      'Outras perguntas / Entre em contato',
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
