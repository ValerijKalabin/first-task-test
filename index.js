const arrowDownList = Array.from(document.querySelectorAll('.fa-arrow-alt-circle-down'));
const arrowUpList = Array.from(document.querySelectorAll('.fa-arrow-alt-circle-up'));
const form = document.querySelector('#form');
const btnForm = form.querySelector('.btn-form');

const modalBody = document.querySelector('.modal-body');
const modalSurname = modalBody.querySelector('.modal-surname');
const modalName = modalBody.querySelector('.modal-name');
const modalPhone = modalBody.querySelector('.modal-phone');
const modalEmail = modalBody.querySelector('.modal-email');

const openCardDescription = function(arrowDownItem) {
    arrowDownItem.classList.add('d-none');
    arrowDownItem.nextElementSibling.classList.remove('d-none');
    arrowDownItem.parentElement.nextElementSibling.classList.remove('d-none');
};
const closeCardDescription = function(arrowUpItem) {
    arrowUpItem.classList.add('d-none');
    arrowUpItem.previousElementSibling.classList.remove('d-none');
    arrowUpItem.parentElement.nextElementSibling.classList.add('d-none');
};

const setModalBody = function() {
    modalSurname.textContent = form.elements.exampleInputSurname.value;
    modalName.textContent = form.elements.exampleInputName.value;
    modalPhone.textContent = form.elements.exampleInputPhone.value;
    modalEmail.textContent = form.elements.exampleInputEmail1.value;
};

arrowDownList.forEach((arrowDownItem) => {
    arrowDownItem.addEventListener('click', () => {
        openCardDescription(arrowDownItem)
    });
});
arrowUpList.forEach((arrowUpItem) => {
    arrowUpItem.addEventListener('click', () => {
        closeCardDescription(arrowUpItem)
    });
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

btnForm.addEventListener('click', setModalBody);
