<script setup>
import { ref } from 'vue'

// default informations for inputs          (ganso, se estiver lendo isso, não foi feito pelo Gepeto)
const name = ref('Luiz Fernando')
const atv = ref('TI e Programação')
const price = ref(20)

const jobs = ref([
  { value: 'frontend-developer', label: 'Front-end Developer' },
  { value: 'backend-developer', label: 'Back-end Developer' },
  { value: 'fullstack-developer', label: 'Full-stack Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'copywriter', label: 'Copywriter' },
  { value: 'seo-specialist', label: 'SEO Specialist' },
  { value: 'translator', label: 'Translator' },
  { value: 'project-manager', label: 'Project Manager' }
])

const countries = ref([
  { value: 'brazil', label: 'Brasil' },
  { value: 'colombia', label: 'Colômbia' },
  { value: 'uruguay', label: 'Uruguai' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'mexico', label: 'México' }
])

const paymentMethods = ref([
  { value: 'Pix', label: 'Pix' },
  { value: 'Débito', label: 'Débito' },
  { value: 'Boleto', label: 'Boleto' }
])

</script>

<template>
<h1>Informações pessoais</h1>
  <div class="inputs-container">
    <div class="left">
      <label for="">Nome</label>
      <input v-model="name" type="text" />
      <label for="">Freelancer</label>
      <select>
        <option v-for="(job, index) in jobs" :key="index" :value="job.value">
          {{ job.label }}
        </option>
      </select>
      <label for="">Atividade Freelancer</label>
      <input v-model="atv" type="text" />
    </div>
    <div class="right">
      <label for="">Preço por hora</label>
      <input v-model="price" type="number" />
      <label for="">Nacionalidade</label>
      <select>
        <option v-for="(country, index) in countries" :key="index" :value="country.value">
          {{ country.label }}
        </option>
      </select>
      <label for="">Forma de pagamento</label>
      <select>
        <option v-for="(method, index) in paymentMethods" :key="index" :value="method.value">
          {{ method.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_configInputs.scss';
</style>
