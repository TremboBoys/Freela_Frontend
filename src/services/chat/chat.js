import { apiChat } from "@/plugins/axios";

async function getAllMessagesService(nameUser) {
    const { data } = await apiChat.get(`/message/${nameUser}`);
    return data;
};

async function updateMessage(id, update) {
    const { data } = await apiChat.patch(`/message/${id}`, update);
    return data;
};

async function getAllImagesService(nameUser) {
    const { data } = await apiChat.get(`/image/${nameUser}`);
    return data;
};

async function updateImage(publicId, userSender, userReceiver) {
    const { data } = await apiChat.put(`/image/${publicId}`, {
        userSender,
        userReceiver
    });
    return data;
};

export {
    getAllMessagesService,
    updateMessage,
    getAllImagesService,
    updateImage
};