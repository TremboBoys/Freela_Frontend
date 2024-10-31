<script setup>
import Title from './title/TitlePayment.vue'
import InputsPayment from './inputs/InputsPayment.vue';
import SendProject from './send/SendPayment.vue';
</script>
<template>
    <div class="container">
        <div class="header">
            <Title />
        </div>
        <div class="inputs">
            <InputsPayment />
        </div>
        <div class="submit">
            <SendProject />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/payment/_paymentLayout.scss';
</style>