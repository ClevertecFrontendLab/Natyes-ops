const passwordHint = 'Пароль не менее 8 латинских букв с заглавной и цифрой';

const passwordRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;

const validatePassword = (_, value: string) => {
    if (value && !passwordRegex.test(value)) {
        console.log(value, passwordRegex.test(value));
        return Promise.reject('Пароль должен быть не менее 8 латинских букв с заглавной и цифрой');
    }
    return Promise.resolve();
};

const confirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
        if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Пароли не совпадают!'));
    },
});

export { confirmPassword, passwordHint, passwordRegex, validatePassword };
