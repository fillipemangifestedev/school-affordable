console.log('Js carregando');

// variables
const openForm = document.querySelector('.button-get');

const form = document.querySelector('.form-help');
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const textareaInput = document.querySelector('.input-text');
const sendButtton = document.querySelector('.form-help-button');

const maskForm = document.querySelector('.form-mask');

const formInput = document.querySelector('.input-form');
const inputButton = document.querySelector('.button-form');

// functions
// submission form - the entire form
function formContact() {
    const viewForm = openForm

    if (viewForm) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        maskForm.style.visibility = "visible";
    }
};

function sendForm() {
    const nameText = nameInput.value
    const emailText = emailInput.value
    const textText = textareaInput.value

    if (nameText && emailText && textText) { };
};

function offMask() {
    const mask = maskForm

    if (mask) {
        form.style.left = "-350px";
        form.style.transform = "none";
        maskForm.style.visibility = "hidden";
    }
};

// submission form - email only
function sendInput() {
    const textInput = formInput.value

    if (textInput) { };
};

// events
// submission form - the entire form
openForm.addEventListener('click', formContact);

sendButtton.addEventListener('click', sendForm);

maskForm.addEventListener('click', offMask);

// submission form - email only
inputButton.addEventListener('click', sendInput);
