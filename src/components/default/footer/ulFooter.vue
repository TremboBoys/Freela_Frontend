<script setup>
const jobLinks = [
  { name: 'TI & Programação', path: '/projects' },
  { name: 'Design & Multimedia', path: '/projects' },
  { name: 'Tradução', path: '/projects' },
  { name: 'Administração', path: '/projects' },
  { name: 'Marketing', path: '/projects' }
]

const freelancerLinks = [
  { name: 'Freelancers Brasil', path: '/freelancers' },
  { name: 'Freelancers Colômbia', path: '/freelancers' },
  { name: 'Freelancers Uruguai', path: '/freelancers' },
  { name: 'Freelancers Argentina', path: '/freelancers' },
  { name: 'Freelancer México', path: '/freelancers' }
]

const infoLinks = [
  { name: 'Sobre nós', path: '/contact/about' },
  { name: 'Contato', path: '/contact' },
  { name: 'Ajuda', path: '/contact/help' },
  { name: 'Política de privacidade', path: '/privacy-policy' },
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