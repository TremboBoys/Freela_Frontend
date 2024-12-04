import { defineStore } from "pinia";
import ProjectService from "@/services/project/project";
import { ref } from "vue";
import { useWarningStore } from "../warning/warning";

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref([]);
    const useWarning = useWarningStore();

    async function getProjects() {
        const data = await ProjectService.getProjects();

        if (!("error" in data)) {
            projects.value = data.reverse();
        } else {
            useWarning.activeWarning('failure', 'Erro ao obter os projetos existentes');
        }
    }

    return { projects, getProjects };
})