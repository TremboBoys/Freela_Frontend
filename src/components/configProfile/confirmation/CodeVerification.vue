<script setup>
import { ref } from 'vue';

const code1 = ref('');
const code2 = ref('');
const code3 = ref('');
const code4 = ref('');
const code5 = ref('');
const code6 = ref('');

const handleInput = (currentIndex, event) => {
  const inputValue = event.target.value;
  
  if (event.inputType === 'deleteContentBackward') {
    const prevInput = document.querySelector(`input[data-index="${currentIndex - 1}"]`);
    if (prevInput) {
      prevInput.focus();
    }
  }
  else if (inputValue) {
    const nextInput = document.querySelector(`input[data-index="${currentIndex + 1}"]`);
    if (nextInput) {
      nextInput.focus();
    }
  }
};
</script>

<template>
  <div class="code-container">
    <div class="code-input">
      <div class="inputs">
        <input type="text" v-model="code1" @input="handleInput(1, $event)" maxlength="1" data-index="1" />
        <input type="text" v-model="code2" @input="handleInput(2, $event)" maxlength="1" data-index="2" />
        <input type="text" v-model="code3" @input="handleInput(3, $event)" maxlength="1" data-index="3" />
        <input type="text" v-model="code4" @input="handleInput(4, $event)" maxlength="1" data-index="4" />
        <input type="text" v-model="code5" @input="handleInput(5, $event)" maxlength="1" data-index="5" />
        <input type="text" v-model="code6" @input="handleInput(6, $event)" maxlength="1" data-index="6" />
      </div>
      <p>Código</p>
    </div>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_codeVerification.scss';
</style>
