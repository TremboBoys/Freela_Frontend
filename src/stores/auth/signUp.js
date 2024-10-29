import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { validateEmail, validateConfirmPassword } from '@/utils/validations/validationsSignUp';
import SignUpService from '@/services/auth/signUp';

export const useSignUpStore = defineStore('signUp', () => {
    const useSignUp = useSignUpStore();
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
        const checkPassword = validateConfirmPassword(useSignUp.user.password, useSignUp.user.confirmPassword)
        console.log(checkEmail, checkPassword);
        if (checkEmail === true && checkPassword === true) {
            const response = await SignUpService.validationEmail(email);
    
            if(response === true) {
                router.push('/confirmation-email');
            } else {
                console.log(response);
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

    return { user, showMessageError, stepCode, validationEmail, createUser };
});