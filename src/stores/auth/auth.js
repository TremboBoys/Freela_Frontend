import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import AuthService from '@/services/auth/auth';

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();
    const isLogged = ref(false);
    const user = reactive({
        email: '',
    });

    return { user, isLogged };
});