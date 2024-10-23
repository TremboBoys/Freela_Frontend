<script setup>
import { ref, defineEmits } from 'vue';
import { useSignUpStore } from '@/stores/auth/signUp';

const emit = defineEmits(['submitCode']);
const useSignUp = useSignUpStore();

const handleInput = (currentIndex, event) => {
  const inputValue = event.target.value;
  
  if (event.inputType === 'deleteContentBackward') {
    useSignUp.user.code[currentIndex - 1] = ''
    const prevInput = document.querySelector(`input[data-index="${currentIndex - 1}"]`);
    if (prevInput) {
      prevInput.focus();
    }
  }
  else if (inputValue) {
    if (useSignUp.user.code[currentIndex - 1] == '') {
      useSignUp.user.code[currentIndex - 1] = inputValue;
      console.log(useSignUp.user.code[currentIndex - 1]);
      if (currentIndex < 6 && useSignUp.user.code.includes('') === true) {
        let nextInput = undefined;
        if (currentIndex === 6) {
          const index = useSignUp.user.code.findIndex((item) => {
            return item === '';
          });
          nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
        } else {
          nextInput = document.querySelector(`input[data-index="${currentIndex + 1}"]`);
        }
        nextInput.focus();
      } else if (!useSignUp.user.code.includes('')) {
        emit('submitCode', useSignUp.user.code.join(''));
      }
    } else {
      const currentInput = document.querySelector(`input[data-index="${currentIndex}"]`);
      const nextInput = document.querySelector(`input[data-index="${currentIndex + 1}"]`);
      currentInput.value = inputValue[0];
      nextInput.focus();
    }
  }
};
</script>

<template>
  <div class="code-container">
    <div class="code-input">
      <div class="inputs">
        <input type="number" @input="handleInput(1, $event)" max="9" data-index="1" />
        <input type="number" @input="handleInput(2, $event)" max="9" data-index="2" />
        <input type="number" @input="handleInput(3, $event)" max="9" data-index="3" />
        <input type="number" @input="handleInput(4, $event)" max="9" data-index="4" />
        <input type="number" @input="handleInput(5, $event)" max="9" data-index="5" />
        <input type="number" @input="handleInput(6, $event)" max="9" data-index="6" />
      </div>
      <p>Código</p>
    </div>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_codeVerification.scss';
</style>
