<template>
    <div>
        <!-- Navbar Section -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <router-link to="/" class="navbar-brand navbar-logo">
                    <img src="@/assets/images/logo/tasker-logo.png" alt="logo" class="logo" />
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="fas fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-for="(item, index) in navItems" :key="index">
                            <router-link class="nav-link" :href="`${item.link}`">{{ item.text }}</router-link>
                        </li>
                    </ul>
                </div>
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
                                <h6 class="white">Encontre os melhores profissionais ou ofereça seu talento como freelancer.</h6>
                                <router-link to="" class="routerLink">
                                    <button class="fadeIn">Registre-se</button>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-12 right">
                            <DotLottieVue style="height: 400px; width: 400px" class="img-fluid wow fadeInUp" autoplay loop src="https://lottie.host/3698d83f-18ed-40db-87f5-a01d3a6a4908/AUzzJ8stah.json" />  
                        </div>
                    </div>
                </div>
            </div>
            <span class="svg-wave">
                <img class="svg-hero" src="@/assets/images/home-test/applight-wave.svg" />
            </span>
        </section>

        <!-- Other sections (About, Features, etc.) -->
        <section v-for="(section, index) in sections" :key="index" :id="section.id" :data-scroll-index="index"
            class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">{{ section.title }}</h3>
                        <span class="line wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s"></span>
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">{{ section.content }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import WOW from 'wow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { gsap } from 'gsap';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
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

<style scoped>
@import '@/assets/Sass/home/_animation.scss';
@import '@/assets/Sass/home/_home.scss';
</style>