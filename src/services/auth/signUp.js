import { apiAuth } from "@/plugins/axios";

class SignUpService {
    async createUser(userInfo = {}) {
        try {
            const { data } = await apiAuth.post('/user/', {
                name: userInfo.name,
                email: userInfo.email,
                username: userInfo.username,
                password: userInfo.password,
                type: userInfo.type_acount
            });
            return data;
        } catch(error) {
            console.error(error);
            return { "message": error };
        };
    }
};

export default new SignUpService();