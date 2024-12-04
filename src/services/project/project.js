import { api } from "@/plugins/axios";

class ProjectService {
    async createProject(projectData) {
        try {
            const { data } = await api.post('/project/Projetos/', projectData);
            return data;
        } catch(error) {
            console.error('Error in POST project: ', error);
            return { error };
        };
    };
    async getProject(idProject) {
        try {
            const { data } = await api.get(`/project/Projetos/${idProject}/`);
            return data;
        } catch(error) {
            console.error('Error in GET project: ', error);
            return { error };
        };
    };
    async getProjects() {
        try {
            const { data } = await api.get('/project/Projetos/');
            return data;
        } catch(error) {
            console.error('Error in GET projects: ', error);
            return { error };
        };
    };
};

export default new ProjectService();