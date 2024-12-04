import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref([]);

    return { projects };
})