import { defineStore } from "pinia";
import { ref, reactive, watch } from "vue";
import { flagCardFunction, luhnAlgorithm } from "@/utils/validations/paymentAlgorithms";
import {} from "@/utils/validations/paymentAlgorithms";
import PaymentService from "@/services/payment/payment";

export const usePaymentStore = defineStore('payment', () => {
    const infoPayment = reactive({
        methodPayment: 'pix',
        namePayer: '',
        typeDocument: 'Selecione o seu tipo de documento',
        numberDocument: '',
        numberCard: '',
        expirationDate: '',
        cvv: ''
    });
    const typeDocuments = ref([]);
    const flagCard = ref('unknown');
    const luhn = ref(false);

    async function getTypeDocuments() {
        const types =  await PaymentService.getTypeDocuments();
        if (types) {
            typeDocuments.value = types;
        }
    };

    function verifyFlagCard() {
        flagCard.value = flagCardFunction(infoPayment.numberCard.toString());
    };

    watch(() => infoPayment.numberCard, (newValue, oldValue) => {
        console.log(newValue);
        if (newValue.length > oldValue.length && newValue.length == 4) {
            console.log(newValue);
            verifyFlagCard();
        } else if (newValue.length < 4) {
            flagCard.value = 'unknown';
        }
    })

    return { infoPayment, typeDocuments, flagCard, luhn, getTypeDocuments };
})