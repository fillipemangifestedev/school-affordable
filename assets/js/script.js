console.log('Js carregando');

// variables
const openForm = document.querySelector('.button-get');

const form = document.querySelector('.form-help');
const sendButtton = document.querySelector('.form-help-button');

const maskForm = document.querySelector('.form-mask');

const formInput = document.querySelector('.input-form');
const inputButton = document.querySelector('.button-form');

// functions
function formContact() {
    const viewForm = openForm

    if (viewForm) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        maskForm.style.visibility = "visible";
    }
};

function sendForm() { };

function offMask() {
    const mask = maskForm

    if (mask) {
        form.style.left = "-350px";
        form.style.transform = "none";
        maskForm.style.visibility = "hidden";
    }
};

function sendInput() { };

// events
openForm.addEventListener('click', formContact);

sendButtton.addEventListener('click', sendForm);

maskForm.addEventListener('click', offMask);

formButton.addEventListener('click', sendInput);
