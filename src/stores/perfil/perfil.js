import { defineStore } from "pinia";
import { ref, reactive } from "vue";
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
    const perfis = ref([]);

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
    };

    async function getPerfis() {
        useWarning.state.isLoading = true;
        try {
            const data = await PerfilService.getPerfis();
            perfis.value = data;
        } catch(error) {
            console.error('Error in GET perfis: ', error);
        };
        useWarning.state.isLoading = false;
    };

    function filterPerfil(username = '') {
        if (username !== '') {
            const perfil = perfis.value.filter(perfil => perfil.user.username === username);
            return perfil[0];
        }
    }

    return { perfil, perfis, createPerfil, getPerfil, getPerfis, filterPerfil };
});