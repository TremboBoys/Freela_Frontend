import { apiAuth } from "@/plugins/axios";

class SignUpService {
    async validationEmail(email) {
        try {
            console.log(email);
            const { data } = await apiAuth.post('/code/', { email });
            console.log(data);
            return true;
        } catch(error) {
            console.error(error);
            return error;
        };
    };

    async createUser(userInfo = {}) {
        try {
            await apiAuth.post('/user/', {
                name: userInfo.name,
                username: userInfo.username,
                password: userInfo.password,
                code: userInfo.code,
                type_user: 1
            });
            return true;
        } catch(error) {
            console.error(error);
            return error;
        }
    }
};

export default new SignUpService();