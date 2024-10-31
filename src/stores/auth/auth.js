import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();
    const state = reactive({
        showLogin: true,
        popUpEffect: 'filter: blur(5px); pointer-events: none;'
    });
    const isLogged = ref(false);
    const user = reactive({
        email: '',
    });

    return { user, state, isLogged };
});