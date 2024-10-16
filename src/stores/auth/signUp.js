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
        if (validateEmail(email), validateConfirmPassword(useSignUp.user.password, useSignUp.user.confirmPassword)) {
            const response = await SignUpService.validationEmail(email);
    
            if(response === true) {
                router.push('/sign-up/verification-code');
            } else {
                console.log(response);
            };
        } else {
            showMessageError.general = 'Email, senha e/ou confirmar senha precisam ser preenchidos!';
        };
    };

    async function createUser(userInfo = {}) {
        delete userInfo.email;

        const response = await SignUpService.createUser(userInfo);

        if (response === true) {
            router.push('/sign-in');
        } else {
            user.code = ['', '', '', '', '', ''];
        };
    };

    return { user, showMessageError, stepCode, validationEmail, createUser };
});