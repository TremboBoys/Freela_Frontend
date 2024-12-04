<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAddressStore } from '@/stores/payment/address';
import { useWarningStore } from '@/stores/warning/warning';
import LoadSpinner from '@/components/global/LoadSpinner.vue';
const useAddress = useAddressStore();
const useWarning = useWarningStore();
const router = useRouter();
</script>

<template>
    <div class="address-form">
        <h2>Cadastro de Endereço</h2>
        <form @submit.prevent="">
            <div>
                <label for="zip">CEP:</label>
                <input type="text" id="zip" placeholder="Ex: 12345-678" v-model="useAddress.address.zip" minlength="9" maxlength="9" required />
            </div>
            <div>
                <label for="street">Rua:</label>
                <input type="text" id="street" v-model="useAddress.address.street" required />
            </div>
            <div>
                <label for="number">Número:</label>
                <input type="text" id="number" v-model="useAddress.address.number" required />
            </div>
            <div>
                <label for="neighborhood">Bairro:</label>
                <input type="text" id="neighborhood" v-model="useAddress.address.neighborhood" required />
            </div>
            <div>
                <label for="complement">Complemento:</label>
                <input type="text" id="complement" v-model="useAddress.address.complement" />
            </div>
            <div>
                <label for="city">Cidade:</label>
                <input type="text" id="city" v-model="useAddress.address.city" required />
            </div>
            <div>
                <label for="state">Estado:</label>
                <input type="text" id="state" v-model="useAddress.address.state" required />
            </div>
            <div>
                <label for="cellphone">Número de telefone:</label>
                <input type="text" id="cellphone" placeholder="Ex. (47) 98830-0373" v-model="useAddress.address.cellphone" required>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
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

.address-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
}

.address-form h2 {
    text-align: center;
}

.address-form div {
    margin-bottom: 1rem;
}

.address-form label {
    display: block;
    margin-bottom: 0.5rem;
}

.address-form input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid $input-border-color;
    border-radius: 4px;
}

.address-form button {
    width: 100%;
    padding: 0.75rem;
    background-color: $secondary-color;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.address-form button:hover {
    background-color: $button-hover-color;
}
</style>