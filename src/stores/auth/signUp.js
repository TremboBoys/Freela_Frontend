import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import SignUpService from '@/services/auth/signUp';

export const useSignUp = defineStore('signUp', () => {
    const user = reactive({
        name: '',
        username: '',
        password: '',
        email: '',
        code: ''
    });
    const stepValidation = ref(false);

    const validationEmail = async (email) => {
        try {
            await SignUpService.validationEmail(email);
            stepValidation.value = true;
        }
        catch(error) {
            console.error('Erro:', error);
        };
    };

    const createUser = async (user) => {
        try {
            await SignUpService.createUser(user);
        }
        catch(error) {
            console.error('Erro:', error);
        };
    }

    return { user, stepValidation, validationEmail, createUser };
});