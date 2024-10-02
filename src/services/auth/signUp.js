import { api } from '@/plugins/axios';

class SignUpService {
    async validationEmail(email) {
        const { data } = await api.post('/user/validationEmail', email);
        return data;
    }

    async createUser(user) {
        const { data } = await api.post('/user/user', user);
        return data;
    }
}

export default new SignUpService();