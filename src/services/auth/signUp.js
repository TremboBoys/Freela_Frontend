import { apiAuth } from "@/plugins/axios";

class SignUpService {
    async createUser(userInfo = {}) {
        try {
            await apiAuth.post('/user/', {
                name: userInfo.name,
                email: userInfo.email,
                username: userInfo.username,
                password: userInfo.password,
                type: userInfo.type_acount
            });
            return true;
        } catch(error) {
            console.error(error);
            return error;
        };
    }
};

export default new SignUpService();