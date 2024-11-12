import { apiPerfil } from "@/plugins/axios";

class PerfilService {
    async getNacionalities() {
        const { data } = await apiPerfil.get('/nacionality/');
        return data;
    };

    async getAreas() {
        const { data } = await apiPerfil.get('/area/');
        return data;
    };

    async getSubAreas() {
        const { data } = await apiPerfil.get('/subArea/');
        return data;
    };

    async createPerfil(perfil) {
        const { data } = await apiPerfil.post('/perfil/', perfil);
        return data;
    };

    async getCurrentPerfil(type, info = []) {
        console.log(type, info);
        if (type == 'email') {
            const { data } = await apiPerfil.get(`/perfil/?user_email=${info[0]}`);
            return data;
        } else {
            let URL = `/perfil/`;
            for (let c = 0; c < info.length; c++) {
                if (c == 0) {
                    URL += `?user_username=${info[c]}`
                }
                URL += `,user_username=${info[c]}`;
            }
            const { data } = await apiPerfil.get(URL);
            return data;
        }
    }

    async getPerfil(id) {
        const { data } = await apiPerfil.get(`/perfil/${id}/`);
        return data;
    }
    async getPerfis() {
        const { data } = await apiPerfil.get('/perfil/');
        return data;
    }
};

export default new PerfilService();