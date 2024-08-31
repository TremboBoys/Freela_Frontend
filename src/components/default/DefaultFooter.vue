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
  <footer>
    <div class="logo-icon">
      <div class="top-div">
        <img id="logo" src="../../assets/images/workana-logo.png" alt="" />
        <div class="socialmedia-icons">
            <img src="../../assets/images/instagram.png" alt="" />
            <img src="../../assets/images/github.png" alt="" />
        </div>
      </div>
      <div class="bottom-div">
        <p>2024 - Todos os direitos reservados</p>
      </div>
    </div>
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
  </footer>
</template>
<style scoped>
@import '../../assets/Sass/default/_defaultFooter.scss';
</style>
