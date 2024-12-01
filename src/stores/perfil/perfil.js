import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useWarningStore } from "@/stores/warning/warning";
import { getEmailUser } from "@/services/auth/auth";
import PerfilService from "@/services/perfil/perfil";

export const usePerfilStore = defineStore('perfil', () => {
    const useWarning = useWarningStore();
    const perfil = reactive({
        id: null,
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
        let perfilCopy = perfil;
        delete perfilCopy.id
        try {
            const data = await PerfilService.createPerfil(perfilCopy);
            return true;
        } catch(error) {
            console.error('Error registering profile: ', error);
        }
    };

    async function getPerfil() {
        useWarning.state.isLoading = true;

        try {
            const email = await getEmailUser();
            try {
                const data = await PerfilService.getCurrentPerfil('email', [email]);

                console.log(data);

                for (let c = 0; c < data.length; c++) {
                    Object.entries(data[c]).forEach(([key, value]) => {
                        perfil[key] = value; // Atribuindo o valor à propriedade do perfil
                    });
                }
            } catch(error) {
                console.error('Error in GET perfil current user: ', error);
                useWarning.activeWarning('failure', 'Erro ao tentar exibir informações do seu perfil!');
            }
        } catch(error) {
            console.error('Error in GET email passage: ', error);
            useWarning.activeWarning('failure', 'Erro ao verificar seu email!');
        }

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