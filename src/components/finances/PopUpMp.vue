<script setup>
</script>

<template>
    <div class="container-pop-up-mp">
        <div class="container-logo">
            <img src="@/assets/images/logo/tasker-logo.png" class="image-logo" alt="">
            <img src="@/assets/images/logo/add.png" class="image-add" alt="">
            <img src="@/assets/images/logo/mercado-pago-horizontal.png" class="image-mp" alt="">
        </div>
        <div class="container-request">
            <h2>Conecte-se ao Mercado Pago para receber seus pagamentos.</h2>
            <div class="container-button-authorization">
                <p class="description">Para conseguirmos direcionar os pagamentos a sua conta, precisamos que você autorize as transações.</p>

                <button><a href="https://auth.mercadopago.com.br/authorization?response_type=code&client_id=2559043759198862&redirect_uri=https://ms-pix.onrender.com/authClient/">Autorizar nosso sistema</a></button>

                <p class="observation">Caso ainda não tenha uma conta como vendedor no Mercado Pago, crie uma antes com o mesmo email de sua conta no Tasker.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/finances/_popUpMp.scss';
</style>