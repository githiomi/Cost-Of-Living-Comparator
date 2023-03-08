// Responsiveness
const toggler = document.querySelector('.toggler i');
const menu = document.querySelector('.nav');

toggler.addEventListener('click', () => {
    // When clicked, toggle menu
    menu.classList.toggle('show');
    toggler.classList.toggle('fa-times');
});