<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { useSignUpStore } from '@/stores/auth/signUp';
import { useAuthStore } from '@/stores/auth/auth';
import { PopUpSignUp, SignInPassage } from '@/components';
import WOW from 'wow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const useAuth = useAuthStore();
const useSignUp = useSignUpStore();

// Dados das seções e navbar
const navItems = ref([
{ text: 'Entrar', link: '/' },
]);

const sections = ref([
{ id: 'about', title: 'About', content: 'Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.' },
{ id: 'features', title: 'Features', content: 'Lorem ipsum dolor sit amet.' },
{ id: 'team', title: 'Our Team', content: 'Meet the best team in the world.' },
{ id: 'testimonials', title: 'Testimonials', content: 'What our clients say about us.' },
{ id: 'faq', title: 'FAQ', content: 'Frequently Asked Questions' },
{ id: 'contact', title: 'Contact Us', content: 'Get in touch with us.' }
]);

// Referência para as seções
const sectionRefs = ref([]);
const currentIndex = ref(0);
const topOffset = 0;

// Função para rolar até a seção
function scrollToSection(index) {
if (index < 0 || index >= sections.value.length) return;

const targetPosition = sectionRefs.value[index].offsetTop + topOffset;
window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
});

currentIndex.value = index;
}

// Atualiza o índice atual com base na rolagem
function updateCurrentIndex() {
const scrollPosition = window.scrollY;
for (let i = 0; i < sectionRefs.value.length; i++) {
    const sectionTop = sectionRefs.value[i].offsetTop + topOffset;
    const sectionBottom = sectionTop + sectionRefs.value[i].offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentIndex.value = i;
        break;
    }
}
}

// Ouve eventos de rolagem e teclas de seta
function handleKeyDown(event) {
if (event.key === 'ArrowUp' && currentIndex.value > 0) {
    scrollToSection(currentIndex.value - 1);
} else if (event.key === 'ArrowDown' && currentIndex.value < sections.value.length - 1) {
    scrollToSection(currentIndex.value + 1);
}
}

onMounted(() => {
// Inicializa o WOW.js
new WOW({
    boxClass: 'wow', // A classe aplicada aos elementos que terão animação
    animateClass: 'animated', // A classe que ativa a animação
    offset: 100, // Distância de rolagem antes de animar o elemento
    mobile: true, // Ativar animações em dispositivos móveis
}).init();

// Animação GSAP
gsap.from('.banner-text h2', { duration: 1, y: -50, opacity: 0 });
gsap.from('.banner-text h6', { duration: 1.2, y: -30, opacity: 0, delay: 0.5 });
gsap.from('.banner-text p', { duration: 1.4, y: -20, opacity: 0, delay: 0.8 });

// Adiciona eventos de rolagem e tecla
window.addEventListener('scroll', updateCurrentIndex);
window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
// Remove eventos de rolagem e tecla
window.removeEventListener('scroll', updateCurrentIndex);
window.removeEventListener('keydown', handleKeyDown);
});
</script>
<template>
    <div :style="(useAuth.state.showLogin) ? useAuth.state.popUpEffect : (useSignUp.state.registerUser) ? useAuth.state.popUpEffect : ''">
        <!-- Navbar Section -->
        <nav class="navbar">
            <div class="container">
                <router-link to="/" class="navbar-brand navbar-logo">
                    <img src="@/assets/images/logo/full-logo.png" alt="logo" class="logo" />
                </router-link>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-for="(item, index) in navItems" :key="index">
                        <router-link class="nav-link" to="/dashboard">{{ item.text }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Banner Section -->
        <section id="home" class="banner">
            <div class="banner-overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-12 left">
                            <div class="banner-text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                <h2 class="white">Bem-vindo ao nosso sistema!</h2>
                                <h6 class="white">Encontre os melhores profissionais ou ofereça seu talento como
                                    freelancer.</h6>
                                <router-link to="/dashboard" class="routerLink">
                                    <button class="fadeIn">Registre-se</button>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-12 right">
                            <DotLottieVue class="img-fluid wow img-responsive fadeInUp" autoplay
                                loop src="https://lottie.host/3698d83f-18ed-40db-87f5-a01d3a6a4908/AUzzJ8stah.json" />
                        </div>
                    </div>
                </div>
            </div>
            <span class="svg-wave">
                <img class="svg-hero" src="@/assets/images/home-test/applight-wave.svg" />
            </span>
        </section>

        <!-- Other sections (About, Features, etc.) -->
        <section class="section-padding">
            <div class="container">
                <div class="row text-center">
                    <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Sistema de pagamento
                    </h3>
                    <div class="col-md-6 text-center left">
                        <span class="line wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                            <DotLottieVue autoplay loop
                                src="https://lottie.host/af9c7499-8b74-4f88-b07e-9dc02a172dbb/kucosvPxVz.json" class="canvas" />
                        </span>
                    </div>
                    <div class="col-md-6 text-center right">
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">Nosso sistema de pagamento
                            é realizado com a tecnologia PIX, cartão de crédito e débito. Os pagamentos serão realizados
                            somente quando o freelancer realizar o projeto do cliente.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-padding">
            <div class="container">
                <div class="row text-center">
                    <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Usuários
                    </h3>
                    <div class="col-md-6 text-center left">
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">Nossos usuários são
                            clientes ou freelancers, onde o freelancer oferece suas habilidades para projetos que os
                            clientes cadastraram. Contamos com um sistema de avaliação para uma melhor escolha de qual
                            freelancer contratar.</p>
                    </div>
                    <div class="col-md-6 text-center right">
                        <span class="line wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                            <DotLottieVue autoplay loop
                                src="https://lottie.host/b959557c-90f3-4af9-8836-9b7c89b3b89c/EFmvF3ozlC.json" class="canvas" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-padding">
            <div class="container">
                <div class="row text-center">
                    <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Sistema de conversa entre freelancer e cliente
                    </h3>
                    <div class="col-md-6 text-center left">
                        <span class="line wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                            <DotLottieVue autoplay loop
                                src="https://lottie.host/0f7464d9-41a1-4663-8a4d-f70fff7de23e/8PBdmhXQcI.json" class="canvas"/>
                        </span>
                    </div>
                    <div class="col-md-6 text-center right">
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">Nosso sistema de chat foi desenvolvido para uma melhor comunicação entre o freelancer e o cliente, sem precisar passar outros meios de comunicação, dando mais segurança aos nossos usuários.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-padding">
            <div class="container">
                <div class="row text-center">
                    <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Recomendação de serviços
                    </h3>
                    <div class="col-md-6 text-center left">
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">Contamos com uma IA de recomendação de projetos. Ela consiste em analisar sua área de trabalho e recomendar somente serviços que tenham relação com sua área escolhida. Mas, temos também um sistema de busca para caso queira procurar projetos com uma área diferente da sua.</p>
                    </div>
                    <div class="col-md-6 text-center right">
                        <span class="line wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                            <DotLottieVue autoplay loop src="https://lottie.host/452ec843-f41b-4863-8479-2c8c4650f51b/lFmmcq3bvr.json" class="canvas"  />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <SignInPassage v-if="useAuth.state.showLogin" />
    <PopUpSignUp v-if="useSignUp.state.registerUser" />
</template>


<style scoped>
@import '@/assets/Sass/home/_animation.scss';
@import '@/assets/Sass/home/_home.scss';
</style>