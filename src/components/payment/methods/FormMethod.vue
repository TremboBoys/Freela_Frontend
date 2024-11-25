<script setup>
import { onMounted, watch } from 'vue';
import { usePaymentStore } from '@/stores/payment/payment';
import { urlFlag } from '@/utils/validations/paymentAlgorithms';

const usePayment = usePaymentStore();

onMounted(async() => {
  await usePayment.getTypeDocuments();
});

watch(() => [usePayment.infoPayment.numberDocument, usePayment.infoPayment.expirationDate], ([newValueNumberDocument, newValueExpirationDate], [oldValueNumberDocument, oldValueExpirationDate]) => {
    if (usePayment.infoPayment.expirationDate.length == 2 && newValueExpirationDate.length > oldValueExpirationDate.length) {
        usePayment.infoPayment.expirationDate += '/'
    }
    if (usePayment.infoPayment.typeDocument == 'CPF') {
        if (newValueNumberDocument.length > oldValueNumberDocument.length) {
            if (newValueNumberDocument.length == 3 || newValueNumberDocument.length == 7) {
                usePayment.infoPayment.numberDocument += '.';
            } else if (newValueNumberDocument.length == 11) {
                usePayment.infoPayment.numberDocument += '-';
            };
        };
    } else {
        if (newValueNumberDocument.length > oldValueNumberDocument.length) {
            if (newValueNumberDocument.length == 2 || newValueNumberDocument.length == 6) {
                usePayment.infoPayment.numberDocument += '.';
            } else if (newValueNumberDocument.length == 10) {
                usePayment.infoPayment.numberDocument += '/';
            } 
            else if (newValueNumberDocument.length == 15) {
                usePayment.infoPayment.numberDocument += '-';
            };
        };
    }
});
</script>

<template>
    <div v-if="usePayment.infoPayment.methodPayment != 'pix'" class="payment-form">
      <h2>Pagamento com {{(usePayment.infoPayment.methodPayment == 'credit') ? 'Crédito' : 'Débito'}}</h2>
      <form @submit.prevent="usePayment.solicityPayment('card')">
        <div>
          <label for="debitCardNumber">Nome do titular do Cartão:<sup>*</sup></label>
          <input type="text" id="cardName" v-model="usePayment.infoPayment.namePayer" required />
        </div>
        <div>
          <label for="creditCardNumber">Número do Cartão:<sup>*</sup></label>
          <input type="text" id="creditCardNumber" v-model="usePayment.infoPayment.numberCard" :minlength="(usePayment.state.flagCard == 'amex') ? '15' : (usePayment.state.flagCard == 'visa') ? '13' : '16'" :maxlength="(usePayment.state.flagCard == 'amex') ? '18' : '19'" required />
          <div class="container-flag" :style="(usePayment.state.flagCard == 'unknown') ? 'visibility: hidden' : 'visibility: visible'">
            <img :src="urlFlag(usePayment.state.flagCard)" :style="(usePayment.state.flagCard == 'amex') ? 'width: 48px' : 'width: 40px'" alt="">
          </div>
        </div>
        <div>
          <label for="creditExpiryDate">Data de Validade:<sup>*</sup></label>
          <input type="text" id="creditExpiryDate" v-model="usePayment.infoPayment.expirationDate" maxlength="5" required />
        </div>
        <div>
          <label for="creditCvv">CVV:<sup>*</sup></label>
          <input type="text" id="creditCvv" maxlength="3" required />
        </div>
        <div>
          <label for="typeDocument">Tipo de documento:<sup>*</sup></label>
          <select id="typeDocument" v-model="usePayment.infoPayment.typeDocument">
            <option v-for="(type, index) in usePayment.typeDocuments" :key="index" :value="type.name">{{ type.name }}</option>
          </select>
        </div>

        <div v-if="usePayment.infoPayment.typeDocument !== 'Selecione o seu tipo de documento'">
            <div>
                <label for="debitCvv">Número do {{ usePayment.infoPayment.typeDocument }}:<sup>*</sup></label>
                <input type="text" id="numberDocument" :style="(usePayment.state.validDocument) ? 'border: green solid 1px' : (usePayment.state.validDocument === false) ? 'border: red solid 1px' : ''" :placeholder="(usePayment.infoPayment.typeDocument == 'CPF') ? 'Ex. 123.456.789-10' : 'Ex. XX.XXX.XXX/000X-XX.'" v-model="usePayment.infoPayment.numberDocument" required>
            </div>
        </div>
    
        <RouterLink to="methods-payment/address" class="submit">
          <button type="submit">Pagar com Cartão de {{(usePayment.infoPayment.methodPayment == 'credit') ? 'Crédito' : 'Débito'}}</button>
        </RouterLink>
      </form>
    </div>

    <div v-else class="payment-form">
      <form @submit.prevent="usePayment.solicityPayment('pix')">
          <div>
              <label for="typeDocument">Tipo de documento:<sup>*</sup></label>
              <select id="typeDocument" v-model="usePayment.infoPayment.typeDocument" required>
                <option value="Selecione o seu tipo de documento" disabled>Selecione o seu tipo de documento</option>
                <option v-for="(type, index) in usePayment.typeDocuments" :key="index" :value="type.name">{{ type.name }}</option>
              </select>
          </div>
          <div v-if="usePayment.infoPayment.typeDocument !== 'Selecione o seu tipo de documento'">
            <div>
              <label for="debitCvv">Número do {{ usePayment.infoPayment.typeDocument }}:<sup>*</sup></label>
              <input type="text" id="numberDocument" :placeholder="(usePayment.infoPayment.typeDocument == 'CPF') ? 'Ex. 123.456.789-10' : 'Ex. XX.XXX.XXX/000X-XX.'" v-model="usePayment.infoPayment.numberDocument" required />
            </div>
          </div>
      </form>
      <!-- <RouterLink @submit.prevent="submitPixPayment" to="methods-payment/QRCode" class="pix-link">Pagar com Pix</RouterLink> -->
    </div>
</template>

<style lang="scss" scoped>
$secondary-color: #0d4247;
$background-color: #f7f7f7;
$input-border-color: #ccc;
$input-focus-color: #008cba;
$button-hover-color: darken($secondary-color, 3%);
$font-size-base: 16px;
$font-size-heading: 24px;
$font-title-color: #000;

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
    display: block;
    font-weight: bold;
    color: $font-title-color;
    margin-bottom: 0.5rem;
    sup {
      position: relative;
      top: 4px;
      font-size: 15px;
      color: red;
    }
  }

  input {
    width: 480px;
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

  #cardName {
    text-transform: uppercase;
  }

  .container-flag {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 40px;
    height: 40px;
    bottom: 45px;
    left: 425px;

    img {
        flex-shrink: 0;
        max-height: 100%;
        object-fit: contain;
        border-radius: 0px;
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
</style>