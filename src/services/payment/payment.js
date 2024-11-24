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

    async makePayment(infoPayment) {
        try {
            const { data } = await axios.post('http://localhost:8000/api/pay/', infoPayment);
            return data;
        } catch(error) {
            console.error('Error trying to make payment: ', error);
            return false;
        };
    };
}

export default new PaymentService();