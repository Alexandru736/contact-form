//get all input fields

//add event listener to submit button

/**
 * Validate each field
 * Validation criterias - each field must be filled/checked
 */

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const radioButtonList = [...document.querySelectorAll('.radio-btn')];
const message = document.getElementById('message');
const consentCheckbox = document.getElementById('consent');
const submitButton = document.querySelector('.btn');
const alert = document.querySelector('.alert-container');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const queryError = document.getElementById('query-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');

submitButton.addEventListener('click', () => submitEvent());

function submitEvent() {
    if(validateFields()) {
        alert.setAttribute('aria-hidden', 'false');
    }

    return;
}

function validateFields() {
    let validForm = true;
    if(!validateFirstName()) validForm = false;
    if(!validateLastName()) validForm = false;
    if(!validateEmail()) validForm = false;
    if(!validateQueryType()) validForm = false;
    if(!validateMessage()) validForm = false;
    if(!validateConsent()) validForm = false;
    
    if(validForm === false) return false;
    return true;
}

function validateFirstName() {

    if(firstName.value === "") {
        firstNameError.setAttribute('aria-hidden', 'false');
        return false;
    }
    firstNameError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateLastName() {

    if(lastName.value === "") {
        lastNameError.setAttribute('aria-hidden', 'false');
        return false;
    }
    lastNameError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateEmail() {
    if(email.value === '') {
        emailError.setAttribute('aria-hidden', 'false');
        return false;
    }
    emailError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateQueryType() {
    
    const checkedList = radioButtonList.filter((radioButton) => radioButton.checked === true);
    if (!checkedList.length) {
        queryError.setAttribute('aria-hidden', 'false');
        return false;
    }
    queryError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateMessage(){
    if(message.value === '') {
        messageError.setAttribute('aria-hidden', 'false');
        return false;
    }
    messageError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateConsent() {
    if(!consentCheckbox.checked) {
        consentError.setAttribute('aria-hidden', 'false');
        return false;
    }
    consentError.setAttribute('aria-hidden', 'true');
    return true;
}