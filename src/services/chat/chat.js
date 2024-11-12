import { apiChat } from "@/plugins/axios";

async function getAllMessagesService(nameUser) {
    const { data } = await apiChat.get(`/message/${nameUser}`);
    return data;
};

async function updateMessage(id, update) {
    const { data } = await apiChat.patch(`/message/${id}`, update);
    return data;
}

export {
    getAllMessagesService,
    updateMessage
};