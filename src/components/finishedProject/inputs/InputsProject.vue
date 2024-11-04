<script setup>
import InputText from './InputText.vue';
import InputSelect from './InputSelect.vue';
import InputPayment from './InputPayment.vue';
import InputNumber from './InputNumber.vue';
</script>
<template>
    <div class="container">
        <div class="left">
            <InputText />
            <InputPayment />
            <InputNumber />
        </div>
        <div class="right">
            <InputSelect />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/payment/inputs/_inputsPayment.scss';
</style>