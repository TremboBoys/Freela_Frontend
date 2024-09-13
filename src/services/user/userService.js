import { api } from "@/plugins/axios";

class UserService {
    async verifyEmail(email) {
        const { data } = await api.post('/user/validationEmail', email);
        return data;
    };

    async createUser(user) {
        const { data } = await api.post('/user/user/', user);
        return data;
    };
    
    async updateUser(user) {
        const { data } = await api.patch('/user/', user);
        return data;
    };
};

export default new UserService();