<script setup>
import { ref } from 'vue';

const digits = ref(new Array(6).fill('')); // Ajuste o tamanho conforme necessário

const updateDigit = (value, index) => {
    digits.value[index] = value;
    // Mover foco para o próximo input automaticamente
    if (value.length === 1 && index < digits.value.length - 1) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) {
            nextInput.focus();
        }
    }
};
</script>
<template>
    <div class="container">
        <div class="title">
            <h1>Autenticação em dois fatores</h1>
            <p>Confirme o código enviado ao cadastrado</p>
        </div>
        <div class="code-input-container">
            <label for="code">Código</label>
            <div class="code-input-box">
                <div class="digits">
                    <input v-for="(digit, index) in digits" :key="index" v-model="digits[index]"
                        @input="updateDigit(digit, index)" :id="`digit-${index}`" type="number" maxlength="1"
                        pattern="\d*" inputmode="numeric" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/signIn/TwoFA/_signInTwoFA.scss';
</style>