import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useWarningStore } from '@/stores/warning/warning';
import { validateName } from '@/utils/validations/validationsSignUp';
import SignUpService from '@/services/auth/signUp';

export const useSignUpStore = defineStore('signUp', () => {
    const useWarning = useWarningStore();
    const user = reactive({
        name: '',
        username: '',
        email: '',
        type_acount: 0
    });

    const state = {
        registerUser: true,
        stepChooseTypeAccount: true,
        stepInputs: false,
    };

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
        if (validateName) {
            const response = await SignUpService.createUser(userInfo);
    
            if (response === true) {
                state.registerUser = false;
                state.stepInputs = false;
            } else {
                useWarning.state.isActive = true;
                useWarning.state.failure = true;
                useWarning.state.message = 'Não foi possível registrar sua conta, reinicie a página e tente novamente!';
    
                setTimeout(() => {
                    useWarning.state.isActive = false;
                    useWarning.state.failure = false;
                    useWarning.state.message = '';
                }, 10000);
            };
        }
    };

    return { user, state, createUser };
});