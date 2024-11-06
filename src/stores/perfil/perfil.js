import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePerfilStore = defineStore('perfil', () => {
    const perfil = reactive({
        balance: 0,
        is_public: true,
        user: '',
        price_per_hour: 0,
        nacionality: '',
        photo: null,
        payment_type: 0,
        about_me: '',
        area: '',
        subarea: ''
    });               

    return { perfil };
});