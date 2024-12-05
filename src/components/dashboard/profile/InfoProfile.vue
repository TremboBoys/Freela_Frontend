<script setup>
import { ref, onMounted } from "vue";
import { usePerfilStore } from "@/stores/perfil/perfil";

const usePerfil = usePerfilStore();
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
                <h1>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(usePerfil.perfil.balance) }}</h1>
                <div class="note">
                    <span class="blue-star" v-for="(star, index) in 4" :key="index"><img src="@/assets/images/dashboard/blue-star.png" alt=""></span>
                    <span class="black-star" v-for="(star, index) in 1" :key="index"><img src="@/assets/images/dashboard/black-star.png" alt=""></span>
                    <span class="quantityAvaliations">(1)</span>
                </div>
            </div>
            <div class="info-item">
                <p>Preço por hora:</p>
                <h1>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(usePerfil.perfil.price_per_hour) }}</h1>
            </div>
        </div>
    </div>

</template>
<style scoped>
@import '@/assets/Sass/dashboard/profile/_infoProfile.scss';
</style>