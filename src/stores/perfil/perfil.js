import { defineStore } from "pinia";
import { reactive } from "vue";
import { useWarningStore } from "@/stores/warning/warning";
import PerfilService from "@/services/perfil/perfil";

export const usePerfilStore = defineStore('perfil', () => {
    const useWarning = useWarningStore();
    const perfil = reactive({
        balance: 0,
        is_public: true,
        user: '',
        price_per_hour: 0,
        nacionality: '',
        photo: null,
        payment_type: 1,
        about_me: '',
        area: 'Selecione sua área',
        sub_area: 'Selecione sua sub-area'
    });

    async function createPerfil() {
        try {
            const data = await PerfilService.createPerfil(perfil);
            console.log(data);
            localStorage.setItem("profile_id", data.id);
            return true;
        } catch(error) {
            console.error('Error registering profile: ', error);
        }
    };

    async function getPerfil() {
        useWarning.state.isLoading = true;
        const id = localStorage.getItem("profile_id");
        try {
            const data = await PerfilService.getPerfil(id);
            for (let property in data) {
                perfil[property] = data[property];
            };
        } catch(error) {
            console.error('Error in GET perfil: ', error);
        };
        useWarning.state.isLoading = false;
    }

    return { perfil, createPerfil, getPerfil };
});