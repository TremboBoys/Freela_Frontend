import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth/auth';
import { useWarningStore } from '@/stores/warning/warning';
import { usePerfilStore } from '../perfil/perfil';
import { validateName, validatePassword } from '@/utils/validations/validationsSignUp';
import SignUpService from '@/services/auth/signUp';

export const useSignUpStore = defineStore('signUp', () => {
    const useWarning = useWarningStore();
    const useAuth = useAuthStore();
    const usePerfil = usePerfilStore();
    const router = useRouter();
    const user = reactive({
        name: '',
        username: '',
        email: '',
        password: '',
        type_acount: ''
    });

    const state = reactive({
        registerUser: false,
        stepChooseTypeAccount: true,
        stepChooseArea: false,
        stepInputs: false
    });

    async function createUser(userInfo = {}) {
        if (validateName && validatePassword) {
            const response = await SignUpService.createUser(userInfo);
    
            if ("message" in response) {
                useWarning.activeWarning('failure', 'Não foi possível registrar sua conta, reinicie a página e tente novamente!');
            } else {
                usePerfil.perfil.user = response.id;
                await usePerfil.createPerfil();
                state.registerUser = false;
                state.stepInputs = false;
                useAuth.state.userExist = true;
                router.push({ path: '/dashboard' });
            };
        }
    };

    return { user, state, createUser };
});