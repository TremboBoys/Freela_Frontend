import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import AuthService from '@/services/auth/auth';

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();
    const isLogged = ref(false);
    const user = reactive({
        username: '',
        password: ''
    });
    const token = ref({});

    const verifyAuth = () => {
        console.log('Aaaa');
    };

    const createAuth = async(user) => {
        try {
            const data = await AuthService.createAuth(user);
            token.value = data;
            isLogged.value = true;
            router.push('/dashboard');
        }
        catch(error) {
            console.error('Erro', error);
        }
    }

    return { user, createAuth, verifyAuth };
});