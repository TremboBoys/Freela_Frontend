import { apiAuth } from "@/plugins/axios";

class SignUpService {
    async validationEmail(email) {
        try {
            const { data } = await apiAuth.post('/code/', email);
            console.log(data);
            return true;
        } catch(error) {
            console.error(error);
            return error;
        };
    };

    async createUser(userInfo = {}) {
        try {
            await apiAuth.post('/user/', userInfo);
            return true;
        } catch(error) {
            console.error(error);
            return error;
        }
    }
};

export default new SignUpService();