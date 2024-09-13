<script setup>
const jobLinks = [
  { name: 'TI & Programação', path: '/' },
  { name: 'Design & Multimedia', path: '/' },
  { name: 'Tradução', path: '/' },
  { name: 'Administração', path: '/' },
  { name: 'Marketing', path: '/' }
]

const freelancerLinks = [
  { name: 'Freelancers Brasil', path: '/' },
  { name: 'Freelancers Colômbia', path: '/' },
  { name: 'Freelancers Uruguai', path: '/' },
  { name: 'Freelancers Argentina', path: '/' },
  { name: 'Freelancer México', path: '/' }
]

const infoLinks = [
  { name: 'Sobre nós', path: '/' },
  { name: 'Contato', path: '/' },
  { name: 'Ajuda', path: '/' },
  { name: 'Política de privacidade', path: '/' },
  { name: 'Termos de serviço', path: '/' }
]
</script>

<template>
<div class="links-container">
    <div class="ul-links">
    <h2>Encontre trabalho</h2>
    <ul>
        <li v-for="(link, index) in jobLinks" :key="index">
        <RouterLink class="routerlink" :to="link.path">{{ link.name }}</RouterLink>
        </li>
    </ul>
    </div>
    <div class="ul-links">
    <h2>Freelancers</h2>
    <ul>
        <li v-for="(link, index) in freelancerLinks" :key="index">
        <RouterLink class="routerlink" :to="link.path">{{ link.name }}</RouterLink>
        </li>
    </ul>
    </div>
    <div class="ul-links">
    <h2>Quem somos?</h2>
    <ul>
        <li v-for="(link, index) in infoLinks" :key="index">
        <RouterLink class="routerlink" :to="link.path">{{ link.name }}</RouterLink>
        </li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@import '../../../assets/Sass/default/footer/_ulFooter.scss';
</style>