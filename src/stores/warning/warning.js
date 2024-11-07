import { defineStore } from "pinia";
import { reactive } from "vue";

export const useWarningStore = defineStore('warning', () => {
    const state = reactive({
        isLoading: false,
        isActive: false,
        success: false,
        warning: false,
        failure: false,
        message: ''
    });

    function activeWarning(typeWarning, msg) {
        state.isActive = true;
        state[typeWarning] = true;
        state.message = msg;

        setTimeout(() => {
            state.isActive = false;
            state[typeWarning] = false;
            state.message = '';
        }, 10000);
    }

    return { state, activeWarning };
});