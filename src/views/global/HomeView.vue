<script setup>
import { onMounted, onUnmounted } from 'vue';
import HeaderHome from '@/components/home/HeaderHome.vue';
import MainHome from '@/components/home/MainHome.vue';
import SignInPassage from '@/components/signIn/SignInPassage.vue';
import PopUpSignUp from '@/components/signUp/PopUpSignUp.vue';
import QuickWarnings from '@/components/global/QuickWarnings.vue';
import FreelaClient from '@/components/home/FreelaClient.vue';
import TalentsSkills from '@/components/home/TalentsSkills.vue';
import DefaultFooter from '@/components/default/footer/DefaultFooter.vue';
import { useAuthStore } from '@/stores/auth/auth';
import { useSignUpStore } from '@/stores/auth/signUp';
import { useWarningStore } from '@/stores/warning/warning';

const useAuth = useAuthStore();
const useSignUp = useSignUpStore();
const useWarning = useWarningStore();

onMounted(async() => {
    useAuth.verifyAuth();
});

function animateOnScroll() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // IntersectionObserver para detectar quando o elemento entra na viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona classe para animação
                observer.unobserve(entry.target); // Desconecta após animar o elemento
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // Função de fallback com scroll para elementos que entram depois
    const handleScroll = () => {
        revealElements.forEach(el => {
            const positionFromTop = el.getBoundingClientRect().top;
            if (positionFromTop - window.innerHeight <= 0) {
                el.classList.add('visible');
            }
        });
    };

    // Adiciona EventListener para rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove observador e listener ao desmontar o componente
    onUnmounted(() => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
    });
}

onMounted(() => {
    animateOnScroll();
});
</script>

<template>
    <div>
        <HeaderHome class="scroll-reveal"/>
        <MainHome :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" class="scroll-reveal" />
        <SignInPassage v-if="useAuth.state.showLogin === true" />
        <PopUpSignUp v-if="useSignUp.state.registerUser === true" />
        <div class="container-warning-layout" v-if="useWarning.state.isActive">
            <QuickWarnings />
        </div>
        <FreelaClient :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" class="scroll-reveal"/>
        <TalentsSkills :style="(useAuth.state.showLogin === true || useSignUp.state.registerUser === true) ? useAuth.state.popUpEffect : ''" class="scroll-reveal"/>
        <DefaultFooter class="scroll-reveal"/>
    </div>
</template>

<style scoped>
/* Estilo inicial para elementos que ainda não apareceram */
.scroll-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Classe adicionada quando o elemento entra na tela */
.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>