<template>
    <div class="container">
        <h1 v-if="!isLoading">Clique no botão abaixo para gerar o QRCode e o método de "copia e cola" para prosseguir com o pagamento</h1>
        <button class="buttonShow" @click="showPopup = true" v-if="!isLoading">Realizar o Pagamento</button>

        <!-- Tela de loading -->
        <div v-if="isLoading" class="loading">
            <p>Processando pagamento...</p>
        </div>

        <!-- Popup -->
        <div v-if="showPopup && !isLoading" class="popup">
            <div class="popup-content">
                <span class="close" @click="showPopup = false">&times;</span>
                <img src="@/assets/images/QRCode.png" alt="QR Code" />
                <p class="copiaCola">Copia e cola:</p>
                <p>{{ pixCode }}</p>
                <RouterLink v-if="payment" to="paymentConfirm" class="submit">
                    <button class="copy"></button>
                </RouterLink>
                <button v-else class="copy" @click="copyToClipboard">Copy PIX Code</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const payment = ref(false);
const showPopup = ref(false);
const isLoading = ref(false); // Variável para o estado de loading
const pixCode = '00020126360014BR.GOV.BCB.PIX0114+55119999999925204000053039865406123456789ABCD';

const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode).then(() => {
        alert('PIX Code copied to clipboard');
        payment.value = true;
        isLoading.value = true; // Ativa o loading

        // Simula um tempo de processamento e redireciona após 2 segundos
        setTimeout(() => {
            isLoading.value = false; // Desativa o loading
            router.push({ name: 'paymentConfirm' }); // Redireciona
        }, 2000);
    });
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
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: $secondary-color;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 40vh;

    h1 {
        width: 50vw;
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }
}

.copiaCola {
    font-size: 1.5rem;
}

.buttonShow {
    padding: 10px 20px;
    background-color: $secondary-color;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.copy {
    padding: 10px 20px;
    background-color: $secondary-color;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
}
</style>
