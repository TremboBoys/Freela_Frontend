import { ref } from "vue";
import { defineStore } from "pinia";

export const useFinancesStore = defineStore('finances', () => {
    const showPopUpMp = ref(false);

    return { showPopUpMp };
});