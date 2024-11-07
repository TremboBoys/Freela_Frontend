import { apiChat } from "@/plugins/axios";

async function getAllMessagesService(nameUser) {
    const { data } = await apiChat.get(`/message/${nameUser}`);
    return data;
};

export {
    getAllMessagesService
};