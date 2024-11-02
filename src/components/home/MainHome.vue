<script setup>
import { useAuthStore } from '@/stores/auth/auth';

const useAuth = useAuthStore();
</script>

<template>
    <main>
        <div class="container">
            <div class="left">
                <img src="@/assets/images/Home/work-home.jpg" class="img-work" alt="Home">
            </div>
            <div class="right">
                <div class="content">
                    <h1>Encontre os melhores profissionais ou ofereça seu talento como freelancer</h1>
                    <p>Sucesso começa com uma boa parceria</p>
                        <button class="button" @click="useAuth.state.showLogin = true">Registre-se</button>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import "@/assets/Sass/home/_mainHome.scss";
</style>