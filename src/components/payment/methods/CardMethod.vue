<template>
    <div class="payment-container">
        <h1>Escolha o Método de Pagamento</h1>
        <select v-model="paymentMethod">
            <option value="credit">Crédito</option>
            <option value="debit">Débito</option>
            <option value="pix">Pix</option>
        </select>

        <div v-if="paymentMethod === 'debit'" class="payment-form">
            <h2>Pagamento com Débito</h2>
            <form @submit.prevent="submitDebitPayment">
                <div>
                    <label for="debitCardNumber">Número do Cartão:</label>
                    <input type="text" id="debitCardNumber" v-model="debitCardNumber" required />
                </div>
                <div>
                    <label for="debitExpiryDate">Data de Validade:</label>
                    <input type="text" id="debitExpiryDate" v-model="debitExpiryDate" required />
                </div>
                <div>
                    <label for="debitCvv">CVV:</label>
                    <input type="text" id="debitCvv" v-model="debitCvv" required />
                </div>
                <button type="submit">Pagar</button>
            </form>
        </div>

        <div v-if="paymentMethod === 'credit'" class="payment-form">
            <h2>Pagamento com Crédito</h2>
            <form @submit.prevent="submitCreditPayment">
                <div>
                    <label for="creditCardNumber">Número do Cartão:</label>
                    <input type="text" id="creditCardNumber" v-model="creditCardNumber" required />
                </div>
                <div>
                    <label for="creditExpiryDate">Data de Validade:</label>
                    <input type="text" id="creditExpiryDate" v-model="creditExpiryDate" required />
                </div>
                <div>
                    <label for="creditCvv">CVV:</label>
                    <input type="text" id="creditCvv" v-model="creditCvv" required />
                </div>
                <button type="submit">Pagar</button>
            </form>
        </div>

        <div v-if="paymentMethod === 'pix'" class="payment-form">
            <RouterLink @submit.prevent="submitPixPayment" to="/payment/pix" class="pix-link">Pagar com Pix</RouterLink>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const paymentMethod = ref('credit');
const debitCardNumber = ref('');
const debitExpiryDate = ref('');
const debitCvv = ref('');
const creditCardNumber = ref('');
const creditExpiryDate = ref('');
const creditCvv = ref('');

const submitDebitPayment = () => {
    // Lógica para processar o pagamento com débito
    console.log('Pagamento com débito submetido', {
        cardNumber: debitCardNumber.value,
        expiryDate: debitExpiryDate.value,
        cvv: debitCvv.value,
    });
};

const submitCreditPayment = () => {
    // Lógica para processar o pagamento com crédito
    console.log('Pagamento com crédito submetido', {
        cardNumber: creditCardNumber.value,
        expiryDate: creditExpiryDate.value,
        cvv: creditCvv.value,
    });
};
const submitPixPayment = () => {
    // Lógica para processar o pagamento com Pix
    console.log('Pagamento com Pix submetido');
};
</script>

<style scoped lang="scss">
$secondary-color: #008cba;
$background-color: #f7f7f7;
$input-border-color: #ccc;
$input-focus-color: #008cba;
$button-hover-color: darken($secondary-color, 10%);
$font-size-base: 16px;
$font-size-heading: 24px;
$font-title-color: #000;
// Estilos gerais
.payment-container {
  max-width: 50vw;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    font-size: $font-size-heading;
    margin-bottom: 1.5rem;
    color: $font-title-color;
  }

  select {
    width: 100%;
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

.payment-form {
  margin-top: 1rem;

  h2 {
    font-size: $font-size-base * 1.25;
    margin-bottom: 1rem;
    color: $secondary-color;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  label {
    font-weight: bold;
    color: $font-title-color;
    margin-bottom: 0.5rem;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.75rem;
    font-size: $font-size-base;
    border: 1px solid $input-border-color;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: $input-focus-color;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0.75rem;
    font-size: $font-size-base;
    font-weight: bold;
    color: #fff;
    background-color: $secondary-color;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: $button-hover-color;
    }
  }

  .pix-link {
    color: $secondary-color;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: $button-hover-color;
    }
  }
}

@media (max-width: 768px) {
  .payment-container {
    padding: 1.5rem;
  }

  h1, h2 {
    font-size: $font-size-base * 1.5;
  }

  button[type="submit"] {
    font-size: $font-size-base * 0.9;
  }
}

</style>