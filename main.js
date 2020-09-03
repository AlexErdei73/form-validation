const email = document.querySelector('#email');
const select = document.querySelector('#country');
const postcode = document.querySelector('#postcode');
const password = document.querySelector('#password');
const pswconfirm = document.querySelector('#pswconfirm');
const submit = document.querySelector('button');
const form = document.querySelector('form');
const image = document.querySelector('#hifive');

const regex = {
    'UK': /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i,
    'Hungary': /^[0-9]{4}$/i,
    'France': /^(?:[0-8]\d|9[0-8])\d{3}$/i,
    'Germany': /^[0-9]{5}$/i,
    'Polland': /^[0-9]{2}\-[0-9]{3}$/i
}

email.addEventListener('blur', onExit);
postcode.addEventListener('blur', onExit);
pswconfirm.addEventListener('blur', onExit);
submit.addEventListener('click', onClick);

function onExit(e) {
    const element = e.target;
    switch (element) {
        case email:
            validateEmail();
        break;
        case postcode:
            validatePostCode();
        break;
        case pswconfirm:
            confirmPassword();
        break;
    }
} 

function onClick() {
    validateEmail();
    validatePostCode();
    confirmPassword();
    if (form.checkValidity()) {
        image.classList.remove('hide');
    }
}

function validatePostCode() {
    const validPostCodeRegEx = regex[select.value];
    const isPostCodeValid = validPostCodeRegEx.test(postcode.value);
    const message = 'The postal code format is not for the country!';
    validateElement(postcode, isPostCodeValid, message);
}

function validateEmail() {
    const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i
    const isEmailValid = validEmailRegEx.test(email.value);
    const message ='Please type in a valid email address';
    validateElement(email, isEmailValid, message);
}

function validateElement(element, isElementValid, msg) {
    if (!isElementValid) {
        element.setCustomValidity(msg);
    } else {
        element.setCustomValidity('');
    }
}

function confirmPassword() {
    const isPasswordConfirmed = (password.value == pswconfirm.value);
    const message = 'Please retype the password!';
    validateElement(pswconfirm, isPasswordConfirmed, message);
}