<script setup>
import paymentError from '../../components/payment/paymentError.vue';
import MethodsPayment from '@/components/payment/MethodsPayment.vue';
</script>
<template>
    <div class="container">
        <paymentError v-if="Error == true" />
        <MethodsPayment />
    </div>
</template>