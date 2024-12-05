<script setup>
import { ref, onMounted } from 'vue';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useInfoPopUpStore } from '@/stores/perfil/infoPopUpPerfil';

// default informations for inputs          (ganso, se estiver lendo isso, não foi feito pelo Gepeto)
const name = ref('Luiz Fernando')
const atv = ref('TI e Programação')
const price = ref(20)
const usePerfil = usePerfilStore()
const useInfoPopUp = useInfoPopUpStore();

onMounted(() => {
  useInfoPopUp.getAllInfoNeedPopUp();
})

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
      <input v-model="usePerfil.editPerfil.user.name" type="text" />
      <label for="">Área</label>
      <select v-model="usePerfil.editPerfil.area.name">
        <option v-for="(area, index) in useInfoPopUp.areas" :key="index" :value="area.name">
          {{ area.name }}
        </option>
      </select>
      <label for="">Sub-área</label>
      <select v-model="usePerfil.editPerfil.sub_area.name">
        <option v-for="(subarea, index) in useInfoPopUp.subAreas" :key="index" :value="subarea.name">{{ subarea.name }}</option>
      </select>
    </div>
    <div class="right">
      <label for="">Preço por hora</label>
      <input v-model="usePerfil.editPerfil.price_per_hour" type="number" />
      <label for="">Nacionalidade</label>
      <select v-model="usePerfil.editPerfil.nacionality.name">
        <option v-for="(country, index) in useInfoPopUp.nacionalities" :key="index" :value="country.name">
          {{ country.name }}
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
