import { defineStore } from "pinia";
import { ref, reactive, watch } from "vue";
import { flagCardFunction, luhnAlgorithm, cpfValidator, cnpjValidator } from "@/utils/validations/paymentAlgorithms";
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
    const state = reactive({
        validDocument: null,
        validNumberCard: null,
        flagCard: 'unknown',
    });
    const typeDocuments = ref([]);
    const luhn = ref(false);

    async function getTypeDocuments() {
        const types =  await PaymentService.getTypeDocuments();
        if (types) {
            typeDocuments.value = types;
        }
    };

    function verifyFlagCard() {
        state.flagCard = flagCardFunction(infoPayment.numberCard.toString());
    };

    async function solicityPayment(typePayment) {

    };

    watch(() => [infoPayment.numberCard, infoPayment.numberDocument], ([newValueNumberCard, newValueNumberDocument], [oldValueNumberCard, oldValueNumberDocument]) => {
        if (infoPayment.typeDocument == 'CPF') {
            if (newValueNumberDocument.length == 14) {
                state.validDocument = cpfValidator(infoPayment.numberDocument);
            } else {
                state.validDocument = null;
            };
        } else if (infoPayment.typeDocument == 'CNPJ') {
            if (newValueNumberDocument.length == 18) {
                state.validDocument = cnpjValidator(infoPayment.numberDocument);
            } else {
                state.validDocument = null;
            };
        };
        if (newValueNumberCard.length > oldValueNumberCard.length) {
            if ((newValueNumberCard.length == 4) || (newValueNumberCard.length == 9) || newValueNumberCard.length == 14) {
                infoPayment.numberCard += ' ';
            }
            verifyFlagCard();
        } else if (newValueNumberCard.length < 4) {
            state.flagCard = 'unknown';
        };
        if (newValueNumberCard.length >= 13) {
            state.validNumberCard = luhnAlgorithm(infoPayment.numberCard);
        };
    })

    return { infoPayment, state, typeDocuments, luhn, getTypeDocuments, solicityPayment };
})