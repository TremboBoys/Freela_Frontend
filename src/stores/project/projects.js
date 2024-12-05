import { defineStore } from "pinia";
import ProjectService from "@/services/project/project";
import { ref, reactive, watch } from "vue";
import { usePerfilStore } from "../perfil/perfil";
import { useWarningStore } from "../warning/warning";

export const useProjectsStore = defineStore('projects', () => {
    let auxiliarProjects;
    const projects = ref([]);
    const myProjects = ref([]);
    const usePerfil = usePerfilStore();
    const useWarning = useWarningStore();

    const state = reactive({
        search: ''
    });

    async function getProjects() {
        const data = await ProjectService.getProjects();

        if (!("error" in data)) {
            console.log(data);
            console.log(data.reverse());
            projects.value = data.reverse();
            auxiliarProjects = data.reverse();
        } else {
            useWarning.activeWarning('failure', 'Erro ao obter os projetos existentes');
        };
    };

    function getMyProjects() {
        const id = usePerfil.perfil.user.id;

        myProjects.value = projects.value.filter(project => project.contractor == id && project.status != 3);
        myProjects.value = myProjects.value.slice(0, 2);
        console.log(myProjects.value);
    };

    watch(() => state.search, () => {
        if (state.search != '') {
            projects.value = auxiliarProjects.filter(project => project.title.toLowerCase().includes(state.search.toLowerCase()) == true);
        } else {
            projects.value = auxiliarProjects;
        };
    });

    return { projects, myProjects, state, getProjects, getMyProjects };
})