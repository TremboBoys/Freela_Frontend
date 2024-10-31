import { defineStore } from "pinia";
import { reactive } from "vue";

export const useWarningStore = defineStore('warning', () => {
    const state = reactive({
        isActive: false,
        success: false,
        warning: false,
        failure: false,
        message: 'Alguma coisa'
    });

    return { state };
});