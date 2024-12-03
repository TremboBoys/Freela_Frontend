import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useRegisterProjectStore = defineStore('register-project', () => {
    const registerProject = reactive({
        theme: '',
        title: '',
        description: '',
        context: '',
        function: 1,
        development_level: 0,
        special_resource: 0,
        experience_level: 0,
        project_size: 0,
        budget_range: 0,
        delivery: '',
        contractor: 0,
        in_execution: false,
        created_at: '',
        status: 0,
    });

    const states = reactive({
        uuidThemeSelected: ''
    });

    function assignTheme(text, uuid) {
        if (registerProject.theme != text || states.uuidThemeSelected != uuid) {
            registerProject.theme = text;
            states.uuidThemeSelected = uuid;
        } else {
            registerProject.theme = '';
            states.uuidThemeSelected = '';
        }
    }

    return { registerProject, states, assignTheme };
});