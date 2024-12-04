<script setup>
import { usePerfilStore } from '@/stores/perfil/perfil';

const usePerfil = usePerfilStore();
</script>

<template>
    <div class="container-expanded-reviews">
        <div class="container-reviews">
            <h1>Avaliações sobre você</h1>
            <div class="container-filters">
                <div class="filters">
                    <p>Filtros:</p>
                    <button>Mais recente</button>
                    <button>Mais positivas</button>
                    <button>Mais negativas</button>
                </div>
                <div class="exit-pop-up">
                    <span>
                        <img @click="usePerfil.state.showReviews = false" src="@/assets/images/reject.png" alt="">
                    </span>
                </div>
            </div>
            <div class="reviews">
                <div id="first-review">
                <div class="container-infoUser">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                    <div class="infoUser">
                        <p class="name">João Victor Portela Rocha</p>
                        <div class="container-date-note">
                            <p class="date">1 semana atrás</p>
                            <div class="note">
                                <span class="blue-star" v-for="(star, index) in 5" :key="index"><img src="@/assets/images/dashboard/blue-star.png" alt=""></span>
                                <span class="black-star" v-for="(star, index) in 0" :key="index"><img src="@/assets/images/dashboard/black-star.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="descriptionReview">
                    <p>Ótimo serviço!!! Super prestativo e entendeu direito os meus pedidos, recomendo.</p>
                </div>
            </div>
            <div id="first-review">
                <div class="container-infoUser">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                    <div class="infoUser">
                        <p class="name">João Victor Portela Rocha</p>
                        <div class="container-date-note">
                            <p class="date">1 semana atrás</p>
                            <div class="note">
                                <span class="blue-star" v-for="(star, index) in 5" :key="index"><img src="@/assets/images/dashboard/blue-star.png" alt=""></span>
                                <span class="black-star" v-for="(star, index) in 0" :key="index"><img src="@/assets/images/dashboard/black-star.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="descriptionReview">
                    <p>Ótimo serviço!!! Super prestativo e entendeu direito os meus pedidos, recomendo.</p>
                </div>
            </div>
            <div id="first-review">
                <div class="container-infoUser">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                    <div class="infoUser">
                        <p class="name">João Victor Portela Rocha</p>
                        <div class="container-date-note">
                            <p class="date">1 semana atrás</p>
                            <div class="note">
                                <span class="blue-star" v-for="(star, index) in 5" :key="index"><img src="@/assets/images/dashboard/blue-star.png" alt=""></span>
                                <span class="black-star" v-for="(star, index) in 0" :key="index"><img src="@/assets/images/dashboard/black-star.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="descriptionReview">
                    <p>Ótimo serviço!!! Super prestativo e entendeu direito os meus pedidos, recomendo.</p>
                </div>
            </div>
            <div id="first-review">
                <div class="container-infoUser">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                    <div class="infoUser">
                        <p class="name">João Victor Portela Rocha</p>
                        <div class="container-date-note">
                            <p class="date">1 semana atrás</p>
                            <div class="note">
                                <span class="blue-star" v-for="(star, index) in 5" :key="index"><img src="@/assets/images/dashboard/blue-star.png" alt=""></span>
                                <span class="black-star" v-for="(star, index) in 0" :key="index"><img src="@/assets/images/dashboard/black-star.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="descriptionReview">
                    <p>Ótimo serviço!!! Super prestativo e entendeu direito os meus pedidos, recomendo.</p>
                </div>
            </div>
            <div id="first-review">
                <div class="container-infoUser">
                    <img src="@/assets/images/dashboard/user.png" alt="">
                    <div class="infoUser">
                        <p class="name">João Victor Portela Rocha</p>
                        <div class="container-date-note">
                            <p class="date">1 semana atrás</p>
                            <div class="note">
                                <span class="blue-star" v-for="(star, index) in 5" :key="index"><img src="@/assets/images/dashboard/blue-star.png" alt=""></span>
                                <span class="black-star" v-for="(star, index) in 0" :key="index"><img src="@/assets/images/dashboard/black-star.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="descriptionReview">
                    <p>Ótimo serviço!!! Super prestativo e entendeu direito os meus pedidos, recomendo.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/dashboard/profile/_expandedReviews.scss';
</style>