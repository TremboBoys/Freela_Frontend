const validateName = (name) => {
    const nameRegex = /^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/;
    return nameRegex.test(name);
};

export { validateName };