import { defineStore } from 'pinia';
// import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import { verifyAuthPassage, verifyUserExistInBackend, logout } from '@/services/auth/auth';
import { useSignUpStore } from './signUp';
import { useInfoPopUpStore } from '../perfil/infoPopUpPerfil';
import { useWarningStore } from '../warning/warning';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
    const useSignUp = useSignUpStore();
    const useWarning = useWarningStore();
    const useInfoPopUp = useInfoPopUpStore();
    const router = useRouter();
    // const router = useRouter();
    const state = reactive({
        showLogin: false,
        isAuthenticatedPassage: null,
        userExist: null,
        popUpEffect: 'filter: blur(5px); pointer-events: none;'
    });

    const verifyAuth = async() => {
        const isAuthenticated = await verifyAuthPassage();
        state.isAuthenticatedPassage = (isAuthenticated === true) ? true : false;

        if (state.isAuthenticatedPassage === true) {
            state.userExist = await verifyUserExistInBackend();

            if (state.userExist === true) {
                return true;
            } else if (state.userExist === false) {
                useSignUp.state.registerUser = true;
                await useInfoPopUp.getAllInfoNeedPopUp();
                return false;
            } else {
                useWarning.activeWarning('failure', 'Ocorreu um erro ao verificar se seu usuário existe, verifique sua conexão!');
                
                return false;
            };
        } else {
            state.showLogin = true;
            return false;
        };
    };

    const signOut = async() => {
        const result = await logout();
        if (result) {
            router.push('/');
            location.reload();
        } else {
            useWarning.activeWarning('failure', 'Erro ao tentar se deslogar do sistema!');
        };
    };

    return { state, verifyAuth, signOut };
});