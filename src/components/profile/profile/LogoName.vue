<script setup>
const props = defineProps(['photo', 'name', 'area', 'nacionality']);
</script>


<template>
    <div class="container">
        <div class="info">
            <div class="logo">
                <img src="@/assets/images/dashboard/luiz.jpg" class="img-logo" alt="">
            </div>
            <div class="details">
                <div class="name">
                    <h1>{{ props.name }}</h1>
                </div>
                <div class="additional-info">
                    <p class="description">{{ props.area }}</p>
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
@import '@/assets/Sass/profile/profile/_logoName.scss';
</style>