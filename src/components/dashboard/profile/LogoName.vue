<template>
    <div class="container">
        <div class="info">
            <div class="logo">
                <img src="@/assets/images/dashboard/luiz.jpg" class="img-logo" alt="">
            </div>
            <div class="details">
                <div class="name">
                    <h1>Luiz Fernando</h1>
                    <router-link to="/configurations/">
                        <img src="@/assets/images/dashboard/pencil-blue.png" alt="">
                    </router-link>
                </div>
                <div class="additional-info">
                    <p class="description">Front-end developer</p>
                    <div class="country">
                        <img src="@/assets/images/dashboard/brasil-country.webp" alt="">
                        <p>Brasil</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_logoName.scss';
</style>