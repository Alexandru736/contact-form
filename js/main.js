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
const radioFieldList = document.querySelectorAll('.radio-field');

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
        firstName.setAttribute('aria-invalid', 'true');
        firstNameError.setAttribute('aria-hidden', 'false');
        return false;
    }
    firstName.setAttribute('aria-invalid', 'false');
    firstNameError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateLastName() {

    if(lastName.value === "") {
        lastName.setAttribute('aria-invalid', 'true');
        lastNameError.setAttribute('aria-hidden', 'false');
        return false;
    }
    lastName.setAttribute('aria-invalid', 'false');
    lastNameError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateEmail() {
    if(email.value === '') {
        email.setAttribute('aria-invalid', 'true');
        emailError.setAttribute('aria-hidden', 'false');
        return false;
    }
    email.setAttribute('aria-invalid', 'false');
    emailError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateQueryType() {
    
    const checkedList = radioButtonList.filter((radioButton) => radioButton.checked === true);
    if (!checkedList.length) {
        radioButtonList.forEach((radioButton, index) => {
            if(!checkedList.includes(radioButton)) {
                radioFieldList[index].setAttribute('aria-invalid', 'true');
            }
        });
        queryError.setAttribute('aria-hidden', 'false');
        return false;
    }
    radioButtonList.forEach(radioButton => {
        radioButton.setAttribute('aria-invalid', 'false');
    });
    radioFieldList.forEach(radioField => {
        radioField.setAttribute('aria-invalid', 'false');
    });
    queryError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateMessage(){
    if(message.value === '') {
        message.setAttribute('aria-invalid', 'true');
        messageError.setAttribute('aria-hidden', 'false');
        return false;
    }
    message.setAttribute('aria-invalid', 'false');
    messageError.setAttribute('aria-hidden', 'true');
    return true;
}

function validateConsent() {
    if(!consentCheckbox.checked) {
        consentCheckbox.setAttribute('aria-invalid', 'true');
        consentError.setAttribute('aria-hidden', 'false');
        return false;
    }
    consentCheckbox.setAttribute('aria-invalid', 'false');
    consentError.setAttribute('aria-hidden', 'true');
    return true;
}