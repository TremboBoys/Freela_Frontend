import { ref, reactive, watch } from "vue";
import { usePerfilStore } from "../perfil/perfil";
import AddressService from "@/services/payment/address";
import { defineStore } from "pinia";

export const useAddressStore = defineStore('address', () => {
    const address = reactive({
        street: '',
        number: '',
        neighborhood: '',
        complement: '',
        city: '',
        state: '',
        zip: ''
    });

    const addresses = ref([]);

    const state = reactive({
        validZip: null
    });

    const usePerfil = usePerfilStore();

    const brazilStates = [
        { name: "Acre", acronym: "AC" },
        { name: "Alagoas", acronym: "AL" },
        { name: "Amapá", acronym: "AP" },
        { name: "Amazonas", acronym: "AM" },
        { name: "Bahia", acronym: "BA" },
        { name: "Ceará", acronym: "CE" },
        { name: "Distrito Federal", acronym: "DF" },
        { name: "Espírito Santo", acronym: "ES" },
        { name: "Goiás", acronym: "GO" },
        { name: "Maranhão", acronym: "MA" },
        { name: "Mato Grosso", acronym: "MT" },
        { name: "Mato Grosso do Sul", acronym: "MS" },
        { name: "Minas Gerais", acronym: "MG" },
        { name: "Pará", acronym: "PA" },
        { name: "Paraíba", acronym: "PB" },
        { name: "Paraná", acronym: "PR" },
        { name: "Pernambuco", acronym: "PE" },
        { name: "Piauí", acronym: "PI" },
        { name: "Rio de Janeiro", acronym: "RJ" },
        { name: "Rio Grande do Norte", acronym: "RN" },
        { name: "Rio Grande do Sul", acronym: "RS" },
        { name: "Rondônia", acronym: "RO" },
        { name: "Roraima", acronym: "RR" },
        { name: "Santa Catarina", acronym: "SC" },
        { name: "São Paulo", acronym: "SP" },
        { name: "Sergipe", acronym: "SE" },
        { name: "Tocantins", acronym: "TO" }
    ];

    async function verifyExistAddress() {
        const data = await AddressService.verifyExistAddress(usePerfil.perfil.user.email);

        if (data !== false) {
            for (let c = 0; c < data.length; c++) {
                addresses.value.push(data[c]);
            };
        };
    };

    watch(() => address.zip, async (newValueZip, oldValueZip) => {
        if (newValueZip.length == 9) {
            const data = await AddressService.getParcialAddressByZip(newValueZip);

            if (data !== false) {
                if (!("error" in data)) {
                    address.street = data.logradouro;
                    address.neighborhood = data.bairro;
                    address.city = data.localidade;
                    address.state = data.estado;
                    state.validZip = true;
                } else {
                    state.validZip = false;
                };
            };
        } else {
            if (newValueZip.length == 5) {
                address.zip += '-';
            }
            state.validZip = null;
        };
    });

    return { address, state, brazilStates, verifyExistAddress };
});