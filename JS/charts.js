// Timed function
setTimeout(createCharts, 1000);

function createCharts() {

    // Education
    const educationContent = document.getElementById('educationCanvas').getContext('2d');

    new Chart(educationContent, {
        type: 'pie',
        data: {
            labels: [`${baseCapital} Private School Per Annum`, `${compareCapital} Public School Per Annum`],
            datasets: [
                {
                    label: `${baseCapital.toUpperCase()}`,
                    data: [
                        document.querySelector('.educationBaseTownCost1').innerHTML,
                        document.querySelector('.educationBaseTownCost2').innerHTML
                    ],
                    borderWidth: 2,
                    hoverOffset: 3,
                    hoverBorderColor: '#111'
                },
                {
                    label: `${compareCapital.toUpperCase()}`,
                    data: [
                        document.querySelector('.educationCompareTownCost1').innerHTML,
                        document.querySelector('.educationCompareTownCost2').innerHTML
                    ],
                    borderWidth: 2,
                    hoverOffset: 3,
                    hoverBorderColor: '#111'
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: `EDUCATION COMPARISON BETWEEN ${baseCapital.toUpperCase()} AND ${compareCapital.toUpperCase()}`
                }
            }
        }
    });

    // Food
    const foodContent = document.getElementById('foodCanvas').getContext('2d');

    new Chart(foodContent, {
        type: 'line',
        data: {
            labels: [`${baseCapital.toUpperCase()}`, `${compareCapital.toUpperCase()}`],
            datasets: [
                {
                    label: "1 Kilogram of Rice",
                    data: [
                        document.querySelector('.foodBaseTownCost1').innerHTML,
                        document.querySelector('.foodCompareTownCost1').innerHTML
                    ],
                    borderWidth: 1
                },
                {
                    label: "1 Liter of Milk",
                    data: [
                        document.querySelector('.foodBaseTownCost2').innerHTML,
                        document.querySelector('.foodCompareTownCost2').innerHTML
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
            },
            plugins: {
                title: {
                    display: true,
                    text: `FOOD COMPARISON BETWEEN ${baseCapital.toUpperCase()} AND ${compareCapital.toUpperCase()}`
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
                    data: [
                        document.querySelector('.transportBaseTownCost1').innerHTML,
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
        type: 'doughnut',
        data: {
            labels: ['1 Bedroom Apartment', '3 Bedroom Apartment'],
            datasets: [
                {
                    label: `${baseCapital.toUpperCase()}`,
                    data: [
                        document.querySelector('.housingBaseTownCost1').innerHTML,
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
            labels: ['Basic House Utilities', 'Internet Per Month'],
            datasets: [
                {
                    label: `${baseCapital.toUpperCase()}`,
                    data: [
                        document.querySelector('.utilitiesBaseTownCost1').innerHTML,
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

}    