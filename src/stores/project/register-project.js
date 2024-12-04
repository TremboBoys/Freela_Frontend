import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { useWarningStore } from "../warning/warning";
import ProjectService from "@/services/project/project";
import { usePerfilStore } from "../perfil/perfil";

export const useRegisterProjectStore = defineStore('register-project', () => {
    const registerProject = reactive({
        theme: '',
        title: '',
        description: '',
        context: '',
        function: 0,
        development_level: 0,
        special_resource: 0,
        experience_level: 0,
        project_size: 0,
        budget_range: 0,
        delivery: '',
        contractor: 0,
        in_execution: false,
        status: 1,
    });

    const states = reactive({
        uuidThemeSelected: '',
        numberCharacters: 0,
        currentInput: '',
        haveDateDelivery: false
    });

    const createdProject = ref([]);

    const router = useRouter();
    const useWarning = useWarningStore();
    const usePerfil = usePerfilStore();

    function assignTheme(text, uuid) {
        if (registerProject.theme != text || states.uuidThemeSelected != uuid) {
            registerProject.theme = text;
            states.uuidThemeSelected = uuid;
        } else {
            registerProject.theme = '';
            states.uuidThemeSelected = '';
        }
    };

    function restartPrevent() {
        if (registerProject.theme == '') {
            router.push('/register-project/');
        };
    };

    function canNextPage(path = '') {
        if (path.includes('description')) {
            if (registerProject.theme != '') {
                return true;
            } else {
                return false;
            };
        } else if (path.includes('types')) {
            if (registerProject.title && registerProject.description && registerProject.context) {
                return true;
            } else {
                return false;
            };
        } else if (path.includes('size')) {
            if (registerProject.function && registerProject.development_level && registerProject.special_resource) {
                return true;
            } else {
                return false;
            };
        }
    };

    async function createProject() {
        if (registerProject.experience_level && registerProject.project_size && registerProject.budget_range) {
            registerProject.contractor = usePerfil.perfil.user.id;
            const data = await ProjectService.createProject(registerProject);
    
            if (!("error" in data)) {
                router.push(`/register-project/complete/${data.id}`);
            } else {
                useWarning.activeWarning('failure', 'Erro ao cadastrar seu projeto, reinicie a página e tente novamente!');
            };
        };
    };

    async function getCreatedProject(id) {
        const data = await ProjectService.getProject(id);

        if (!("error" in data)) {
            createdProject.value = data;
        } else {
            router.push('/dashboard');
            useWarning.activeWarning('failure', 'Nenhum projeto foi encontrado!');
        }
    }

    return { registerProject, states, createdProject, assignTheme, canNextPage, restartPrevent, createProject, getCreatedProject };
});