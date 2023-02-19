// Scroll Reveal Animation
const scrollRevealAnimation = ScrollReveal({
    distance: '100px',
    duration: 2000,
    reset: true
});

function scrollRevealLeft(element) {
    scrollRevealAnimation.reveal(element, {origin: 'left'});
}

function scrollRevealRight(element) {
    scrollRevealAnimation.reveal(element, {origin: 'right'});
}

// Get about image
const aboutImg = document.querySelector('#about .container .image');
scrollRevealLeft(aboutImg);

// GEt contact svg
const contactSvg = document.querySelector('#contactSvg');
scrollRevealRight(contactSvg);