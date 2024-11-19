import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

export const apiAuth = axios.create({
    baseURL: 'http://localhost:8000/api/user/'
});

export const apiPerfil = axios.create({
    baseURL: 'http://localhost:8000/api/perfil/'
});

export const apiChat = axios.create({
    baseURL: 'http://localhost:3333/'
});