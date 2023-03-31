// Responsiveness
const toggler = document.querySelector('.toggler i');
const menu = document.querySelector('.nav');

toggler.addEventListener('click', () => {
    // When clicked, toggle menu
    menu.classList.toggle('nav-show');
    toggler.classList.toggle('fa-times');
});

// This is to toggle accordion items if they are filtered out
let dropdowns = document.querySelectorAll('.filter-dropdown-item');
let accordions = document.querySelectorAll('.accordion-item');

for (let i = 0; i < accordions.length; i++) {
    // Code for each accordion item
    dropdowns[i].addEventListener('click', () => {
        let filter = dropdowns[i].innerHTML;

        if (filter === 'Remove All Filters') {
            document.getElementById('filterSelect').innerHTML = 'Filter Results By:';
            for (let j = 0; j < accordions.length; j++) {
                accordions[j].classList.remove('filteredOut');
            }
            return;
        }

        // Populate the filter with text
        document.getElementById('filterSelect').innerHTML = filter;
        for (let a = 0; a < accordions.length; a++) {
            let accordion = accordions[a];
            accordion.classList.remove('filteredOut');
            if (filter !== accordion.querySelector('.accordionName').textContent.trim()){
                accordion.classList.add('filteredOut');
            } 
        }
    });
}