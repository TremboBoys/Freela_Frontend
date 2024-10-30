import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { validateEmail, validateConfirmPassword } from '@/utils/validations/validationsSignUp';
import { useWarningStore } from '@/stores/warning/warning';
import SignUpService from '@/services/auth/signUp';

export const useSignUpStore = defineStore('signUp', () => {
    const useWarning = useWarningStore();
    const state = reactive({
        isLoading: false
    });
    const user = reactive({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        code: ['', '', '', '', '', '']
    });
    const showMessageError = reactive({
        general: '',
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        code: ''
    });
    const stepCode = ref(false);

    const router = useRouter();

    async function validationEmail(email) {
        console.log(user);
        const checkEmail = validateEmail(email);
        const checkPassword = validateConfirmPassword(user.password, user.confirmPassword)
        console.log(checkEmail, checkPassword);
        if (checkEmail === true && checkPassword === true) {
            state.isLoading = true;
            const response = await SignUpService.validationEmail(email);
    
            if(response === true) {
                state.isLoading = false;
                router.push('/confirmation-email');
                useWarning.state.isActive = true;
                useWarning.state.success = true;
                useWarning.state.message = 'Um código foi enviado ao seu email';
                setTimeout(() => {
                    useWarning.state.isActive = false;
                    useWarning.state.success = false;
                    useWarning.state.message = '';
                }, 10000)
            } else {
                state.isLoading = false;
                console.log(response);
                useWarning.state.isActive = true;
                useWarning.state.failure = true;
                useWarning.state.message = 'Não foi possível cadastrar sua conta';
                setTimeout(() => {
                    useWarning.state.isActive = false;
                    useWarning.state.failure = false;
                    useWarning.state.message = '';
                }, 10000)
            };
        } else {
            if (!checkEmail && checkPassword) {
                showMessageError.email = 'Seu email está incorreto!';
            } else if (checkEmail && !checkPassword) {
                showMessageError.general = 'O campo "Confirmar senha" precisa estar igual ao campo "Senha"!';
            } else {
                showMessageError.general = 'Email, senha e/ou confirmar senha precisam ser preenchidos corretamente!';
            }
        };
    };

    async function createUser(userInfo = {}) {
        delete userInfo.email;

        const response = await SignUpService.createUser(userInfo);

        if (response === true) {
            router.push('/sign-in');
        } else {
            user.code = ['', '', '', '', '', ''];
            showMessageError.code = 'Código de validação inválido ou expirado!';
        };
    };

    return { user, state, showMessageError, stepCode, validationEmail, createUser };
});