import { defineStore } from 'pinia';
// import { useRouter } from 'vue-router';
import { reactive, watch } from 'vue';
import { verifyAuthPassage, verifyUserExistInBackend } from '@/services/auth/auth';
import { useSignUpStore } from './signUp';
import { useWarningStore } from '../warning/warning';

export const useAuthStore = defineStore('auth', () => {
    const useSignUp = useSignUpStore();
    const useWarning = useWarningStore();
    // const router = useRouter();
    const state = reactive({
        showLogin: false,
        isAuthenticatedPassage: null,
        userExist: null,
        popUpEffect: 'filter: blur(5px); pointer-events: none;'
    });

    // watch(() => state.showLogin, (newValue) => {
    //     console.log('Chamando o watch');
    //     if (newValue === true) {
    //         document.body.style.overflow = 'hidden'
    //     } else {
    //         document.body.style.overflow = ''
    //     }
    // });

    const verifyAuth = async() => {
        const isAuthenticated = await verifyAuthPassage();
        state.isAuthenticatedPassage = (isAuthenticated === true) ? true : false;

        if (state.isAuthenticatedPassage === true) {
            state.userExist = await verifyUserExistInBackend();

            if (state.userExist === true) {
                return true;
            } else if (state.userExist === false) {
                useSignUp.state.registerUser = true;
                return false;
            } else {
                useWarning.state.isActive = true;
                useWarning.state.failure = true;
                useWarning.state.message = 'Ocorreu um erro ao verificar se seu usuário existe, verifique sua conexão e reinicie a página!';

                setTimeout(() => {
                    useWarning.state.isActive = false;
                    useWarning.state.failure = false;
                    useWarning.state.message = '';
                }, 10000);

                return false;
            }
        } else {
            state.showLogin = true;
            return false;
        }
    }

    return { state, verifyAuth };
});