import { loadMercadoPago } from "@mercadopago/sdk-js";
import axios from "axios";

class PaymentService {
    async getTypeDocuments() {
        try {
            const { data } = await axios.get('https://api.mercadopago.com/v1/identification_types', {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_VUE_MERCADO_PAGO_ACESS_TOKEN}`
                }
            });
            return data;
        } catch(error) {
            console.error('Error in GET type documents: ', error);
            return false;
        };
    };

    async getTokenCard(cardholderName, cardNumber, cardExpirationDate, securityCode, cardholderEmail, identification) {
        await loadMercadoPago();

        const mp = new window.MercadoPago(import.meta.env.VITE_VUE_MERCADO_PAGO_PUBLIC_KEY);

        try {
            const cardToken = mp.card.createToken({
                cardNumber,
                cardholderName,
                cardExpirationDate,
                securityCode,
                cardholderEmail,
                identification: {
                    type: identification.type,
                    number: identification.number
                }
            });
            return cardToken;
        } catch(error) {
            console.error('Erro ao gerar token para o cartão: ', error);
            return false;
        };
    };

    async makePayment(infoPayment) {
        try {
            const { data } = await axios.post('http://localhost:8000/api/project/finished/', infoPayment);
            return data;
        } catch(error) {
            console.error('Error trying to make payment: ', error);
            return { error };
        };
    };
}

export default new PaymentService();