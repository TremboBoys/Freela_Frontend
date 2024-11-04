import { apiAuth } from "@/plugins/axios";
import { Passage, PassageCurrentUser } from "@passageidentity/passage-js";

const passage = new Passage(import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID);
const passageCurrentUser = new PassageCurrentUser({appId: import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID}, passage.session);

async function verifyAuthPassage() {
    try {
        const isAuthenticated = await passage.session.authGuard();
        return isAuthenticated;
    } catch(error) {
        console.error('Erro ao verificar autenticação do usuário: ', error);
        return {message: 'Erro ao verificar autenticação do usuário!'};
    }
};

async function verifyUserExistInBackend() {
    try {
        const email = (await passageCurrentUser.userInfo()).email;

        const { useSignUpStore } = await import('@/stores/auth/signUp');
        const useSignUp = useSignUpStore();

        useSignUp.user.email = email;
        try {
            await apiAuth.post('/login/', {
                email
            });
            return true;
        } catch(error) {
            return (error.response.status === 401) ? false : {message: 'Erro ao tentar verificar existência do usuário!'}
        }
    } catch(error) {
        console.error('Erro ao tentar obter email do usuário: ', error);
        return {message: 'Erro ao tentar obter email do usuário!'};
    }
};

export {
    verifyAuthPassage,
    verifyUserExistInBackend
};