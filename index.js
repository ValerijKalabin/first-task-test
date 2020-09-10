const arrowDownList = Array.from(document.querySelectorAll('.fa-arrow-alt-circle-down'));
const arrowUpList = Array.from(document.querySelectorAll('.fa-arrow-alt-circle-up'));

const openDescription = function(arrowDownItem) {
    arrowDownItem.classList.add('d-none');
    arrowDownItem.nextElementSibling.classList.remove('d-none');
    arrowDownItem.parentElement.nextElementSibling.classList.remove('d-none');
};
const closeDescription = function(arrowUpItem) {
    arrowUpItem.classList.add('d-none');
    arrowUpItem.previousElementSibling.classList.remove('d-none');
    arrowUpItem.parentElement.nextElementSibling.classList.add('d-none');
};

arrowDownList.forEach((arrowDownItem) => {
    arrowDownItem.addEventListener('click', () => {
        openDescription(arrowDownItem)
    });
});
arrowUpList.forEach((arrowUpItem) => {
    arrowUpItem.addEventListener('click', () => {
        closeDescription(arrowUpItem)
    });
});