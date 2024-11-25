export function luhnAlgorithm(numberCard = '') {
    let arrayNumberCard = numberCard.split('');

    for (let c = arrayNumberCard.length - 2; c >= 0; c -= 2) {
        let currentNumber = Number(arrayNumberCard[c]) * 2;
        if (currentNumber > 9) {
            currentNumber -= 9;
        }
        arrayNumberCard[c] = currentNumber.toString();
    };

    console.log(arrayNumberCard);

    let sumNumbersCard = arrayNumberCard.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
    console.log(sumNumbersCard);

    if (sumNumbersCard % 10 == 0) {
        return true;
    } else {
        return false;
    }
};

export function flagCardFunction(numberCard = '') {
    numberCard = numberCard.replace(/\s+/g, '');
    console.log(numberCard);

    if (verifyAmex(numberCard)) {
        return 'amex';
    } else if (verifyVisa(numberCard)) {
        return 'visa';
    } else if (verifyMasterCard(numberCard)) {
        return 'mastercard';
    } else if (verifyElo(numberCard)) {
        return 'elo';
    } else if (verifyDiscover(numberCard)) {
        return 'discover';
    }
};

function verifyAmex(numberCard = '') {
    let sliceNumber = numberCard.slice(0, 2);

    if (sliceNumber == '34' || sliceNumber == '37') {
        return true;
    } else {
        return false;
    };
}

function verifyVisa(numberCard) {
    if (numberCard[0] == '4') {
        return true;
    } else {
        return false;
    };
};

function verifyMasterCard(numberCard = '') {
    let sliceTwoNumbers = Number(numberCard.slice(0, 2));
    let sliceFourNumbers = Number(numberCard.slice(0, 4));

    if ((sliceTwoNumbers >= 51 && sliceTwoNumbers <= 55) || (sliceFourNumbers >= 2221 && sliceFourNumbers <= 2720)) {
        return true;
    } else {
        return false;
    };
};

function verifyElo(numberCard = '') {
    let sliceNumber = numberCard.slice(0, 4);


    if (sliceNumber == '5067' || sliceNumber == '4576' || sliceNumber == '4011' || sliceNumber == '6277' || sliceNumber == '6509') {
        return true;
    } else {
        return false;
    };
};

function verifyDiscover(numberCard = '') {
    let sliceTwoNumbers = Number(numberCard.slice(0, 2));
    let sliceThreeNumbers = Number(numberCard.slice(0, 3));
    let sliceSixNumbers = Number(numberCard.slice(0, 6));

    if (numberCard == '6011' || (sliceSixNumbers >= 622126 && sliceSixNumbers <= 622925) || (sliceThreeNumbers >= 644 && sliceThreeNumbers <= 649) || sliceTwoNumbers == 65) {
        return true;
    } else {
        return false;
    };
};

export function urlFlag(flag) {
    if (flag == 'mastercard') {
        const url = new URL('@/assets/images/payment/mastercard.png', import.meta.url).href;
        return url;
    } else if (flag == 'amex') {
        const url = new URL('@/assets/images/payment/amex.png', import.meta.url).href;
        return url;
    } else if (flag == 'visa') {
        const url = new URL('@/assets/images/payment/visa.png', import.meta.url).href;
        return url;
    } else if (flag == 'elo') {
        const url = new URL('@/assets/images/payment/elo.png', import.meta.url).href;
        return url;
    } else if (flag == 'discover') {
        const url = new URL('@/assets/images/payment/discover.png', import.meta.url).href;
        return url;
    } else {
        const url = new URL('@/assets/images/payment/unknown.png', import.meta.url).href;
        return url;
    };
};

export function cpfValidator(cpf = '') {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/[^0-9]/g, '');

    // Verificar se tem 11 dígitos ou é formado por dígitos repetidos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Função para calcular os dígitos verificadores
    const calculateVerifier = (cpfPartial, factor) => {
        let sum = 0;
        for (let i = 0; i < cpfPartial.length; i++) {
            sum += Number(cpfPartial[i]) * factor--;
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    // Cálculo do primeiro e segundo dígitos verificadores
    const firstVerifier = calculateVerifier(cpf.slice(0, 9), 10);
    const secondVerifier = calculateVerifier(cpf.slice(0, 10), 11);

    // Verificar se os dígitos calculados coincidem com os do CPF
    if (cpf[9] == firstVerifier.toString() && cpf[10] == secondVerifier.toString()) {
        return true;
    } else {
        return false;
    };
};

export function cnpjValidator(cnpj = '') {
    cnpj = cnpj.replace(/[^0-9]/g, '');

    const calculateVerifier = (cnpjPartial, factor) => {
        let sum = 0;
        for (let c = 0; c < cpfValidator.length; c++) {
            if (factor < 2) {
                sum += Number(cnpjPartial[c]) * factor + 7;

                factor--;
            } else {
                sum += Number(cnpjPartial[c]) * factor--;
            };
        };
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    const firstVerifier = calculateVerifier(cnpj.slice(0, 13), 5);
    const secondVerifier = calculateVerifier(cnpj.slice(0, 14), 6);

    if (cnpj[12] == firstVerifier.toString() && cnpj[13] == secondVerifier.toString()) {
        return true;
    } else {
        return false;
    }
}