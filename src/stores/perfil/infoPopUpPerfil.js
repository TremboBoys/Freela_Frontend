import { ref } from "vue";
import PerfilService from "@/services/perfil/perfil";
import { defineStore } from "pinia";

export const useInfoPopUpStore = defineStore('infoPopUpPerfil', () => {
    const nacionalities = ref([]);
    const areas = ref([]);
    const subAreas = ref([]);

    async function getNacionalities() {
        try {
            const data = await PerfilService.getNacionalities();
            console.log(data);
            nacionalities.value = data;
        } catch(error) {
            console.error('Error in GET nacionalities: ', error);
        };
    };

    async function getAreas() {
        try {
            const data = await PerfilService.getAreas();
            areas.value = data;
        } catch(error) {
            console.error('Error in GET areas: ', error);
        };
    };

    async function getSubAreas() {
        try {
            const data = await PerfilService.getSubAreas();
            subAreas.value = data;
        } catch(error) {
            console.error('Error in GET sub-areas: ', error);
        };
    };

    async function getAllInfoNeedPopUp() {
        await getNacionalities();
        await getAreas();
        await getSubAreas();
    };

    return { nacionalities, areas, subAreas, getAllInfoNeedPopUp };
});