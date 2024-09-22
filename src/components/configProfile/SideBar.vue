<script setup>

</script>
<template>
    <div class="sideBar">
        <div class="tabs-area">
            <RouterLink to="/"  class="tab">
                <img src="../../assets/images/configProfile/person-icon.png" alt="">
                <p>Informações pessoais</p>
            </RouterLink>
            <RouterLink to="/"  class="tab">
                <img src="../../assets/images/configProfile/padlock-icon.png" alt="">
                <p>Senha</p>
            </RouterLink>
            <RouterLink to="/"  class="tab">
                <img src="../../assets/images/configProfile/email-icon.png" alt="">
                <p>Email</p>
            </RouterLink>
            <RouterLink to="/"  class="tab">
                <img src="../../assets/images/configProfile/medal-icon.png" alt="">
                <p>Plano de assinatura</p>
            </RouterLink>
            <RouterLink to="/"  class="tab">
                <img src="../../assets/images/configProfile/security-icon.png" alt="">
                <p>Segurança</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
@import "../../assets/Sass/configProfile/_sideBar.scss";

</style>