<script setup>
import { LogoName, InfoProfile, PublicProfile, MainSkills, FavoriteArea, AboutMe, ProjectProgress, CompletedProject } from '@/components';
import { onMounted } from 'vue';
import { usePerfilStore } from '@/stores/perfil/perfil';
import PaymentService from '@/services/payment/payment';

const usePerfil = usePerfilStore();

onMounted(async () => {
    const token = await PaymentService.getTokenCard('BRUNA PORTELA', '5201324693388928', 12, 2028, '763', 'portelabruna20@gmail.com', {type: 'CPF', number: '08181698932'});
    console.log(token);
})
</script>

<template>
    <div class="container">
        <div class="profile">
            <LogoName :name="usePerfil.perfil.user.name" :area="usePerfil.perfil.area.name" />
            <InfoProfile :balance="usePerfil.perfil.balance" :price-per-hour="usePerfil.perfil.price_per_hour" />
            <PublicProfile :active="usePerfil.perfil.is_public" />
            <MainSkills />
            <FavoriteArea />
            <AboutMe :about-me="usePerfil.perfil.about_me" />
        </div>
        <div class="projects">
            <ProjectProgress />
            <CompletedProject />
        </div>
    </div>
    
</template>

<style scoped>
@import '@/assets/Sass/dashboard/_dashboardPage.scss';
</style>