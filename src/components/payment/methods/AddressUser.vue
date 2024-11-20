<template>
    <div v-if="!isLoading" class="address-form">
        <h2>Cadastro de Endereço</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="street">Rua:</label>
                <input type="text" id="street" v-model="address.street" required />
            </div>
            <div>
                <label for="number">Número:</label>
                <input type="text" id="number" v-model="address.number" required />
            </div>
            <div>
                <label for="city">Cidade:</label>
                <input type="text" id="city" v-model="address.city" required />
            </div>
            <div>
                <label for="state">Estado:</label>
                <input type="text" id="state" v-model="address.state" required />
            </div>
            <div>
                <label for="zip">CEP:</label>
                <input type="text" id="zip" v-model="address.zip" required />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
    <div v-if="isLoading" class="loading">
        <LoadSpinner />
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import LoadSpinner from '@/components/global/LoadSpinner.vue';
const router = useRouter();
const isLoading = ref(false);
const address = reactive({
    street: '',
    number: '',
    city: '',
    state: '',
    zip: ''
});

const submitForm = () => {
    console.log(address);
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;
        router.push({ name: 'paymentConfirm' });
    }, 2000);
    // Adicionar a lógica para enviar o endereço para o backend
};
</script>

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