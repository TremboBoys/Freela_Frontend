import { defineStore } from "pinia";
import { ref, reactive, watch } from "vue";
import { flagCardFunction, luhnAlgorithm, cpfValidator, cnpjValidator } from "@/utils/validations/paymentAlgorithms";
import { useWarningStore } from "../warning/warning";
import { usePerfilStore } from "../perfil/perfil";
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
        stepInformationPayment: true,
        stepAddress: false,
        stepQrCode: false,
        stepFinished: false,
        validDocument: null,
        validNumberCard: null,
        flagCard: 'unknown',
    });
    const useWarning = useWarningStore();
    const usePerfil = usePerfilStore();
    const typeDocuments = ref([]);

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
        if (state.validDocument && state.validNumberCard) {
            if (typePayment == 'pix') {
                const data = await PaymentService.makePayment({transaction_amount: 0.01, payment_method_id: 'pix', payer: {
                    email: usePerfil.perfil.user.email, identification: {
                        type: infoPayment.typeDocument,
                        number: infoPayment.numberDocument
                    }
                }});
                if ("error" in data) {
                    useWarning.activeWarning('failure', 'Erro ao solicitar pagamento: ', data.error);
                };
            } else {
                const token = await PaymentService.getTokenCard(infoPayment.namePayer, infoPayment.numberCard, infoPayment.expirationDate, infoPayment.cvv);
                
                if (token !== false) {
                    const data = await PaymentService.makePayment({transaction_amount: 0.01, token, installments: 1, payment_method_id: state.flagCard, payer: {
                        email: usePerfil.perfil.user.email,
                        identification: {
                            type: infoPayment.typeDocument,
                            number: infoPayment.numberDocument
                        }
                    }});
                }
            };
        } else {
            useWarning.activeWarning('failure', 'Documento ou número do cartão inválidos!');
        };
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

    return { infoPayment, state, typeDocuments, getTypeDocuments, solicityPayment };
})