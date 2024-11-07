<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(['balance', 'projectsProgress', 'pricePerHour']);
const balanceFormated = ref('');
const priceFormated = ref('');


onMounted(() => {
    balanceFormated.value = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.balance);
    priceFormated.value = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.pricePerHour);
})
</script>

<template>
    <div class="container">
        <div class="info-box">
            <div class="info-item">
                <p>Saldo atual</p>
                <h1>{{ balanceFormated }}</h1>
                <p>Projetos em execução</p>
                <h1>0</h1>
            </div>
            <div class="info-item">
                <h2>Preço por hora:</h2>
                <h1>{{ priceFormated }}</h1>
                <div class="stars">
                    <span>★★★★★</span>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_infoProfile.scss';
</style>