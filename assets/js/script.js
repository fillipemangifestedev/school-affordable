console.log('Js carregando');

// variables
const openForm = document.querySelector('.button-get');
const form = document.querySelector('.form-help');
const maskForm = document.querySelector('.form-mask');

const formInput = document.querySelector('.input-form');
const formButton = document.querySelector('.button-form');

// functions
function formContact() {
    const viewForm = openForm

    if (viewForm) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        maskForm.style.visibility = "visible";
    }
};

function offMask() {
    const mask = maskForm

    if (mask) {
        form.style.left = "-350px";
        form.style.transform = "none";
        maskForm.style.visibility = "hidden";
    }
}

function sendInput() {

};

// events
openForm.addEventListener('click', formContact);
maskForm.addEventListener('click', offMask);

formButton.addEventListener('click', sendInput);
