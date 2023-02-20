// Responsiveness
const toggler = document.querySelector('.toggler i');
const menu = document.querySelector('.nav');

toggler.addEventListener('click', () => {
    // When clicked, toggle menu
    menu.classList.toggle('show');
    toggler.classList.toggle('fa-times');
});

// For the type writer animation
var type = new Typed(".typewriter", {
    strings: ["<span class='dollar'>_.</span>comparator<span class='dollar'>_.</span>"],
    typeSpeed: 110,
    backSpeed: 100,
    loop: true
});