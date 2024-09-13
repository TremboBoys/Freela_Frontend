<script setup>
    import PaymentConfirm from '@/components/paymentConfirmation/PaymentConfirm.vue';
    import { ref } from 'vue';
    const confirmation = ref(true);
</script>

<template>
    <div v-if="confirmation == true">
        <PaymentConfirm />
    </div>
</template>

<style scoped>
</style>