<script setup>
// import { ref } from 'vue';
import { usePaymentStore } from '@/stores/payment/payment';
import FormMethod from '@/components/payment/methods/FormMethod.vue';

const usePayment = usePaymentStore();
</script>

<template>
  <div class="payment-container">
    <h1>Escolha o Método de Pagamento</h1>
    <select v-model="usePayment.infoPayment.methodPayment">
      <option value="credit">Crédito</option>
      <option value="debit">Débito</option>
      <option value="pix">Pix</option>
    </select>

    <FormMethod />
  </div>
</template>


<style scoped lang="scss">
$secondary-color: #0d4247;
$background-color: #f7f7f7;
$input-border-color: #ccc;
$input-focus-color: #008cba;
$button-hover-color: darken($secondary-color, 3%);
$font-size-base: 16px;
$font-size-heading: 24px;
$font-title-color: #000;

// Estilos gerais
.payment-container {
  max-width: 50vw;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    font-size: $font-size-heading;
    margin-bottom: 1.5rem;
    color: $font-title-color;
  }

  select {
    width: 480px;
    padding: 0.75rem;
    font-size: $font-size-base;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    outline: none;
    transition: border-color 0.3s;
    text-align: center;

    &:focus {
      border-color: $input-focus-color;
    }
  }
}

@media (max-width: 768px) {
  .payment-container {
    padding: 1.5rem;
  }

  h1,
  h2 {
    font-size: $font-size-base * 1.5;
  }

  button[type="submit"] {
    font-size: $font-size-base * 0.9;
  }
}
</style>