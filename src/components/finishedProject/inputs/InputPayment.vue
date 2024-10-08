<script setup>
import { ref } from 'vue';
const selectedPayment = ref('Pix');
const payments = ['Pix', 'Cartão de crédito'];
</script>
<template>
    <div class="dropdown dropdown-2">
        <label for="Payment">Forma de pagamento</label>
        <div class="select-container">
            <select id="payment" v-model="selectedPayment">
                <option v-for="payment in payments" :key="payment" :value="payment">{{ payment }}</option>
            </select>
            <span class="arrow">▼</span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/proposal/inputs/_inputSelect.scss';
</style>