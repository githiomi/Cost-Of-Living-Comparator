// Scroll Reveal Animation
const scrollRevealAnimation = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true
});

function scrollRevealLeft(element) {
    scrollRevealAnimation.reveal(element, {origin: 'left'});
}

function scrollRevealRight(element) {
    scrollRevealAnimation.reveal(element, {origin: 'right'});
}

function scrollRevealTop(element) {
    scrollRevealAnimation.reveal(element, {origin: 'top'});
}

// Get index text
const indexText = document.querySelector('.pageTitle');
scrollRevealTop(indexText);

// Get about image
const aboutImg = document.querySelector('#about .container .image');
scrollRevealLeft(aboutImg);

// Get contact svg
const contactSvg = document.querySelector('#contactSvg');
scrollRevealRight(contactSvg);