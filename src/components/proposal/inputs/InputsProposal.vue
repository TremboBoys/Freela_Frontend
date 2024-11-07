<script setup>
import InputTextProposal from './InputTextProposal.vue';
import InputSelectProposal from './InputSelectProposal.vue';
import InputPayment from './InputPayment.vue';
import InputNumberProposal from './InputNumberProposal.vue';
</script>
<template>
    <div class="container">
        <div class="left">
            <InputTextProposal />
            <InputPayment />
            <InputNumberProposal />
        </div>
        <div class="right">
            <InputSelectProposal />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/payment/inputs/_inputsPayment.scss';
</style>