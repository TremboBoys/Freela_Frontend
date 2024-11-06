import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './auth';
import { useWarningStore } from '@/stores/warning/warning';
import { validateName, validatePassword } from '@/utils/validations/validationsSignUp';
import SignUpService from '@/services/auth/signUp';

export const useSignUpStore = defineStore('signUp', () => {
    const useWarning = useWarningStore();
    const useAuth = useAuthStore();
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
        stepChooseTypeAccount: false,
        stepInputs: false,
        stepChooseArea: true
    });

    // async function validationEmail(email) {
    //     console.log(user);
    //     const checkEmail = validateEmail(email);
    //     const checkPassword = validateConfirmPassword(user.password, user.confirmPassword)
    //     console.log(checkEmail, checkPassword);
    //     if (checkEmail === true && checkPassword === true) {
    //         useWarning.state.isLoading = true;
    //         const response = await SignUpService.validationEmail(email);
    
    //         if(response === true) {
    //             useWarning.state.isLoading = false;
    //             router.push('/confirmation-email');
    //             useWarning.state.isActive = true;
    //             useWarning.state.success = true;
    //             useWarning.state.message = 'Um código foi enviado ao seu email';
    //             setTimeout(() => {
    //                 useWarning.state.isActive = false;
    //                 useWarning.state.success = false;
    //                 useWarning.state.message = '';
    //             }, 10000)
    //         } else {
    //             useWarning.state.isLoading = false;
    //             console.log(response);
    //             useWarning.state.isActive = true;
    //             useWarning.state.failure = true;
    //             useWarning.state.message = 'Não foi possível cadastrar sua conta';
    //             setTimeout(() => {
    //                 useWarning.state.isActive = false;
    //                 useWarning.state.failure = false;
    //                 useWarning.state.message = '';
    //             }, 10000)
    //         };
    //     }
    // };

    async function createUser(userInfo = {}) {
        if (validateName && validatePassword) {
            const response = await SignUpService.createUser(userInfo);
    
            if (response === true) {
                state.registerUser = false;
                state.stepInputs = false;
                useAuth.state.userExist = true;
                router.push({ path: '/dashboard' });
            } else {
                useWarning.activeWarning('failure', 'Não foi possível registrar sua conta, reinicie a página e tente novamente!');
            };
        }
    };

    return { user, state, createUser };
});