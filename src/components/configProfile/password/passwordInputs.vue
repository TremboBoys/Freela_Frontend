<script setup>
import SendButton from './SendButton.vue';
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil/perfil';
import { useInfoPopUpStore } from '@/stores/perfil/infoPopUpPerfil';

const password = ref('');
const isPasswordVisible = ref(false);
const usePerfil = usePerfilStore();7
const useInfoPopUp = useInfoPopUpStore();

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <div class="passwordInputs">
    <h1>Configuração de Senha</h1>
    <div class="inputs">
      <div class="form-group inputBox">
        <input
          type="password"
          disabled
          class="form-control"
          id="passwowrd"
          placeholder=" "
          value="TremboBoys-front"
        />
        <label class="email labelInput" for="email">Sua senha</label>
      </div>
      <div class="form-group inputBox">
        <input
          :type="isPasswordVisible ? 'text' : 'password'"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
          v-model="password"
        />
        <button @click="togglePasswordVisibility" class="eye-icon">
          <img v-if="isPasswordVisible" src="../../../assets/images/configProfile/view.png" alt="Hide password" />
          <img v-else src="../../../assets/images/configProfile/hide.png" alt="Show password" />
        </button>
        <label class="email labelInput" for="email">Sua nova senha</label>
      </div>
      <div class="form-group inputBox">
        <input
          type="password"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder=" "
        />
        <label class="email labelInput" for="email">Confirmar senha</label>
      </div>
    </div>
    <RouterLink to="/ConfirmationPassword"><SendButton title="Enviar" /></RouterLink>
    
  </div>
</template>

<style scoped>

@import '../../../assets/Sass/configProfile/_passwordInputs.scss';
</style>
