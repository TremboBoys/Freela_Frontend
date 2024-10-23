import { api } from "@/plugins/axios";

class AuthService {
    async createAuth(user) {
        const { data } = await api.post('/token/', user);
        return data;
    };
};

export default new AuthService();