import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { usePerfilStore } from "@/stores//perfil/perfil";

export const useSearchChatStore = defineStore('searchChat', () => {
    const usePerfil = usePerfilStore();
    const inputSearch = ref('');
    const foundContacts = ref([]);

    watch(() => [inputSearch.value], () => {
        if (inputSearch.value === '') {
            foundContacts.value = [];
        } else {
            foundContacts.value = [];
            for (const perfil of usePerfil.perfis) {
                if (perfil.user.username.toLowerCase().startsWith(inputSearch.value.toLowerCase())) {
                    foundContacts.value.push({user: perfil.user, photo: perfil.photo});
                }
            }
        }
    })

    return { inputSearch, foundContacts };
})