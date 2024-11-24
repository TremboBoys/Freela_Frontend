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
    cpf = cpf.replace(/[^0-9]/g, '');
    let cpfNineFirstNumbers = cpf.split('');
    cpfNineFirstNumbers = cpfNineFirstNumbers.slice(0, 10).reverse();

    for(let c = 0; c < cpfNineFirstNumbers.length; c++) {
        cpfNineFirstNumbers[c] = Number(cpfNineFirstNumbers[c]) * c + 2;
    };

    const sumCpfNineNumbers = cpfNineFirstNumbers.reduce((accumulator, currentValue) => accumulator += Number(currentValue), 0);

    if ((sumCpfNineNumbers % 11) >= 2) {
        cpfNineFirstNumbers.unshift((11 - sumCpfNineNumbers % 11).toString());
    } else {
        cpfNineFirstNumbers.unshift('0');
    };

    for(let c = 0; c < cpfNineFirstNumbers.length; c++) {
        cpfNineFirstNumbers[c] = Number(cpfNineFirstNumbers[c]) * c + 2;
    };

    const sumCpfTenFirstNumbers = cpfNineFirstNumbers.reduce((accumulator, currentValue) => accumulator += Number(currentValue), 0);

    if ((sumCpfNineNumbers % 11) >= 2) {
        cpfNineFirstNumbers.unshift((11 - sumCpfTenFirstNumbers % 11).toString());
    } else {
        cpfNineFirstNumbers.unshift('0');
    }

    if (cpfNineFirstNumbers.reverse().join('') == cpf) {
        return true;
    } else {
        return false;
    };
}