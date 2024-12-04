import axios from "axios";
import { api } from "@/plugins/axios";

class AddressService {
    async getParcialAddressByZip(zip = '') {
        zip = zip.replace(/-/g, "");
        console.log(zip);
        try {
            const { data } = await axios.get(`http://viacep.com.br/ws/${zip}/json/`);
            console.log(data);
            return data;
        } catch(error) {
            console.log('Error in GET address by CEP: ', error);
            return false;
        };
    };
    async verifyExistAddress(email) {
        try {
            const { data } = await api.get(`pay/address/?email=${email}`);
        } catch(error) {
            console.error('This email doesnt exists: ', error);
            return false;
        };
    };
};

export default new AddressService();