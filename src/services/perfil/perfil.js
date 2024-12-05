import { apiPerfil } from "@/plugins/axios";

class PerfilService {
    async getNacionalities() {
        try {
            const { data } = await apiPerfil.get('/nacionality/');
            return data;
        } catch(error) {
            console.error('Error in GET nacionality: ', error);
            return { error };
        };
    };

    async getAreas() {
        try {
            const { data } = await apiPerfil.get('/area/');
            console.log(data);
            return data;
        } catch(error) {
            console.error('Error in GET areas: ', error);
            return { error };
        };
    };

    async getSubAreas() {
        try {
            const { data } = await apiPerfil.get('/subArea/');
            return data;
        } catch(error) {
            console.error('Error in GET Sub-areas: ', error);
            return { error };
        };
    };

    async createPerfil(perfil) {
        try {
            const { data } = await apiPerfil.post('/perfil/', perfil);
            return data;
        } catch(error) {
            console.error('Error in POST perfil: ', error);
            return { error };
        };
    };

    async getCurrentPerfil(type, info = []) {
        if (type == 'email') {
            const { data } = await apiPerfil.get(`/currentUser/?user_email=${info[0]}`);
            return data;
        } else {
            let URL = `/currentUser/`;
            for (let c = 0; c < info.length; c++) {
                if (c == 0) {
                    URL += `?user_username=${info[c]}`
                }
                URL += `,user_username=${info[c]}`;
            }
            const { data } = await apiPerfil.get(URL);
            return data;
        };
    }

    async getPerfil(id) {
        try {
            const { data } = await apiPerfil.get(`/perfil/${id}/`);
            return data;
        } catch(error) {
            console.error('Error in GET perfil: ', error);
            return { error };
        };
    };
    async getPerfis() {
        try {
            const { data } = await apiPerfil.get('/perfil/');
            return data;
        } catch(error) {
            console.error('Error in GET perfis: ', error);
            return { error };
        };
    };
};

export default new PerfilService();