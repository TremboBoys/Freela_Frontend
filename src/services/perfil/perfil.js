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
};

export default new PerfilService();