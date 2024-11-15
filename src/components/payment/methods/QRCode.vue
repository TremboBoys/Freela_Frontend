<template>
    <div class="container">
        <h1>Clique no botão abaixo para gerar o QRCode e o método de "copia e cola" para prosseguir com o pagamento</h1>
        <button class="buttonShow" @click="showPopup = true">Realizar o Pagamento</button>
        <div v-if="showPopup" class="popup">
            <div class="popup-content">
                <span class="close" @click="showPopup = false">&times;</span>
                <img src="@/assets/images/QRCode.png" alt="QR Code" />
                <p class="copiaCola">Copia e cola:</p>
                <p>{{ pixCode }}</p>
                <button class="copy" @click="copyToClipboard">Copy PIX Code</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
const pixCode = '00020126360014BR.GOV.BCB.PIX0114+55119999999925204000053039865406123456789ABCD';

const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode).then(() => {
        alert('PIX Code copied to clipboard');
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
