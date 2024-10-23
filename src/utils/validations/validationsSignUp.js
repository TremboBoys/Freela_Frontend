const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};

const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
};

const validateCode = (code = []) => {
    for (let number of code) {
        if (number === '') {
            return false;
        }
    }
    return true;
}

export { validateEmail, validateConfirmPassword, validateCode };