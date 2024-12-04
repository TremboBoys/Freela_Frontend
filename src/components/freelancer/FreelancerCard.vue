<script setup>
const types = [
  { name: ' Web Design (3 a 5 anos)' },
  { name: 'Javascript (3 a 5 anos)' },
  { name: 'Marketing (3 a 5 anos)' }
]

const props = defineProps({
  description: {
    type: String,
    default: "Esse usuário não possui uma descrição"
  },
  name: String,

})
</script>

<template>
  <div class="card-container">
    <div class="left-side"></div>
    <div class="card-content">
      <div class="top-side">
        <div class="profile-img">
          <img src="../../assets/images/usuario-de-perfil.png" alt="" />
        </div>
        <div class="informations">
          <div class="name">
            <div class="pro-verified">
              <p>PRO</p>
            </div>
            <p>{{ props.name }}</p>
          </div>
          <div class="specifications">
            <p>Developer Frontend</p>
            <div class="stars">
              <img v-for="index in 5" :key="index" src="../../assets/images/star.png" alt="Imagem repetida" />
            </div>
            <div class="country">
              <img src="../../assets/images/brasil-flag.png" alt="" />
              <p>Brasil</p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-side">
        <p class="description">{{ props.description }}</p>
      </div>
      <div class="bottom-side">
        <div class="types-container">
          <div v-for="(type, index) in types" :key="index" class="type">
            <p>{{ type.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="price-container">
      <div class="price-content">
        <RouterLink id="btnL" to="profile"><button class="profile-button">Ver Perfil</button></RouterLink>
        <div class="price">
          <p>Preço por hora:</p>
          <p>R$20,00</p>
        </div>
        <div class="project-info">
          <p>Projetos realizados: 10</p>
          <p>Horas trabalhadas em projetos por hora: 2</p>
        </div>
      </div>
      <p id="seeMore">Ver mais...</p>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/Sass/freelancer/_freelancerCard.scss';
@import '../../assets/Sass/freelancer/_FreelaCardResp.scss';
</style>
