<script setup>
import paymentError from '../../components/payment/paymentError.vue';
import MakePayment from '@/components/payment/MakePayment.vue';
</script>
<template>
    <div class="container">
        <paymentError v-if="Error == true" />
        <MakePayment />
    </div>
</template>