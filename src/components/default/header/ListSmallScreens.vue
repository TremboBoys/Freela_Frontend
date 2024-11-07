<script setup>
const jobLinks = [
  { name: 'Encontre Projeto', path: '/projects' },
  { name: 'Encontre projetos na minha área', path: '/projects' },
  { name: 'Minha área favorita', path: '/projects' },
  { name: 'Assinatura do Plano', path: '/subscription-plan' },
]

const myProjects = [
  { name: 'Meus Projetos', path: '/dashboard' },
  { name: 'Projetos com maior avaliação', path: '/projects' },
  { name: 'Contrate um freelancer', path: '/freelancers' },
];

const myFinances = [
  { name: 'Realizar pagamento', path: '/make-payment' },
];
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isActive: Boolean,
});
const emit = defineEmits(['close']);

function closeMenu() {
  emit('close');
}
</script>

<template>
    <div :class="{ active: props.isActive  }" class="linksList">
      <div class="icons">
            <RouterLink to="/chat"><img src="../../../assets/images/chat-icon.png" alt=""></RouterLink>
            <RouterLink to="/subscription-plan"><img src="../../../assets/images/crown-icon.png" alt=""></RouterLink>
            <RouterLink to="/dashboard"><img src="../../../assets/images/usuario-de-perfil.png" alt=""></RouterLink>
        </div>
        <div>
          <ul>
            <h1>Encontre Trabalho</h1>
            <li><router-link @click="closeMenu" v-for="(link, index) in jobLinks" :key="index" :to="link.path" class="routerlink">{{ link.name }}</router-link></li>
        </ul>
        <ul>
            <h1>Projetos</h1>
            <li><router-link @click="closeMenu" v-for="(link, index) in myProjects" :key="index" :to="link.path" class="routerlink">{{ link.name }}</router-link></li>
        </ul>
        <ul>
            <h1>Minhas Finanças</h1>
            <li><router-link @click="closeMenu" v-for="(link, index) in myFinances" :key="index" :to="link.path" class="routerlink">{{ link.name }}</router-link></li>
        </ul>
        </div>
    </div>
    
</template>

<style scoped>
@import '../../../assets/Sass/default/header/_ListSmallScreens.scss';
</style>