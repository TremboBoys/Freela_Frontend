import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import UserService from "@/services/user/userService";

export const useUserStore = defineStore('user', () => {
    const router = useRouter();
    const userSignIn = ref({});
    const verifyEmail = async(user) => {
        try {
            await UserService.verifyEmail(JSON.stringify(user.email));
            userSignIn.value = user;
            // router.push({path: '/verify-email'});
        } catch(error) {
            console.error('Erro: ', error);
        }
    };

    const createUser = async(code) => {
        try {
            await UserService.createUser(JSON.stringify({...userSignIn.value, code: code}));
            router.push({name: 'signIn'});
        } catch(error) {
            console.error('Erro: ', error);
        }
    };

    const updateUser = async(user) => {
        try {
            await UserService.updateUser(JSON.stringify(user));
        } catch(error) {
            console.error('Erro: ', error);
        }
    };

    return { userSignIn, verifyEmail, createUser, updateUser }
})