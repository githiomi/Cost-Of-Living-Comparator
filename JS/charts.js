// Universal chart styling
// Chart.defaults.global.defaultFontFamily = 'Poppins';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontSize = '#ffffff';

// Education
const educationContent = document.getElementById('educationCanvas').getContext('2d');

new Chart(educationContent, {
    type: 'pie',
    data: {
        labels: ['Private School Per Annum', 'Public School Per Annum'],
        datasets: [
            {
                label: `${baseCapital.toUpperCase()}`,
                data: [document.querySelector('.educationBaseTownCost1').innerHTML,
                document.querySelector('.educationBaseTownCost2').innerHTML
                ],
                borderWidth: 1
            },
            {
                label: `${compareCapital.toUpperCase()}`,
                data: [
                    document.querySelector('.educationCompareTownCost1').innerHTML,
                    document.querySelector('.educationCompareTownCost2').innerHTML
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Transport
const transportContext = document.getElementById('transportCanvas').getContext('2d');

new Chart(transportContext, {
    type: 'bar',
    data: {
        labels: ['Gasoline per liter', 'Public Transport Fare'],
        datasets: [
            {
                label: `${baseCapital.toUpperCase()}`,
                data: [document.querySelector('.transportBaseTownCost1').innerHTML,
                document.querySelector('.transportBaseTownCost2').innerHTML
                ],
                borderWidth: 1
            },
            {
                label: `${compareCapital.toUpperCase()}`,
                data: [
                    document.querySelector('.transportCompareTownCost1').innerHTML,
                    document.querySelector('.transportCompareTownCost2').innerHTML
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Housing 
const housingContext = document.getElementById('housingCanvas').getContext('2d');

new Chart(housingContext, {
    type: 'line',
    data: {
        labels: ['1 Bedroom Apartment', '3 Bedroom Apartment'],
        datasets: [
            {
                label: `${baseCapital.toUpperCase()}`,
                data: [document.querySelector('.housingBaseTownCost1').innerHTML,
                document.querySelector('.housingBaseTownCost2').innerHTML
                ],
                borderWidth: 1
            },
            {
                label: `${compareCapital.toUpperCase()}`,
                data: [
                    document.querySelector('.housingCompareTownCost1').innerHTML,
                    document.querySelector('.housingCompareTownCost2').innerHTML
                ],
                borderWidth: 1
            }
        ],
        backgroundColor:[
            '#F18F01'
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Utilities
const utilitiesContext = document.getElementById('utilitiesCanvas').getContext('2d');

new Chart(utilitiesContext, {
    type: 'line',
    data: {
        labels: ['1 Bedroom Apartment', '3 Bedroom Apartment'],
        datasets: [
            {
                label: `${baseCapital.toUpperCase()}`,
                data: [document.querySelector('.utilitiesBaseTownCost1').innerHTML,
                document.querySelector('.utilitiesBaseTownCost2').innerHTML
                ],
                borderWidth: 1
            },
            {
                label: `${compareCapital.toUpperCase()}`,
                data: [
                    document.querySelector('.utilitiesCompareTownCost1').innerHTML,
                    document.querySelector('.utilitiesCompareTownCost2').innerHTML
                ],
                borderWidth: 1
            }
        ],
        backgroundColor:[
            '#F18F01'
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});