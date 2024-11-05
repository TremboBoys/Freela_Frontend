const validateName = (name) => {
    const nameRegex = /^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/;
    return nameRegex.test(name);
};

const validatePassword = (password) => {
    const passwordRegex = /^\d*[a-zA-Z]+\d+$/;
    return passwordRegex.test(password);
};

export { validateName, validatePassword };