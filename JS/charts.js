// Timed function
setTimeout(createCharts, 2000);

function createCharts() {

    // Education
    const educationContent = document.getElementById('educationCanvas').getContext('2d');

    new Chart(educationContent, {
        type: 'pie',
        data: {
            labels: [`${baseCapital.toUpperCase()}`, `${compareCapital.toUpperCase()}`],
            datasets: [
                {
                    label: "Private School Per Annum",
                    data: [
                        document.querySelector('.educationBaseTownCost1').innerHTML,
                        document.querySelector('.educationCompareTownCost1').innerHTML
                    ],
                    backgroundColor: [
                        'rgb(241, 143, 1)',
                        'rgb(54, 162, 235)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 5
                },
                {
                    label: "Public School Per Annum",
                    data: [
                        document.querySelector('.educationBaseTownCost2').innerHTML,
                        document.querySelector('.educationCompareTownCost2').innerHTML
                    ],
                    backgroundColor: [
                        'rgb(241, 143, 1)',
                        'rgb(54, 162, 235)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 5
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
            },
            plugins: {
                title: {
                    display: true,
                    text: `TRANSPORT COMPARISON BETWEEN ${baseCapital.toUpperCase()} AND ${compareCapital.toUpperCase()}`
                }
            }
        }
    });

    // Housing 
    const housingContext = document.getElementById('housingCanvas').getContext('2d');

    new Chart(housingContext, {
        type: 'doughnut',
        data: {
            labels: [`${baseCapital.toUpperCase()}`, `${compareCapital.toUpperCase()}`],
            datasets: [
                {
                    label: "1 Bedroom Appartment Rent",
                    data: [
                        document.querySelector('.housingBaseTownCost1').innerHTML,
                        document.querySelector('.housingCompareTownCost1').innerHTML
                    ],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 5
                },
                {
                    label: "3 Bedroom Appartment Rent",
                    data: [
                        document.querySelector('.housingBaseTownCost2').innerHTML,
                        document.querySelector('.housingCompareTownCost2').innerHTML
                    ],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 5
                }
            ]
        },
        options: {
            scales: {
                y: {
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `HOUSING COMPARISON BETWEEN ${baseCapital.toUpperCase()} AND ${compareCapital.toUpperCase()}`
                }
            }
        }
    });

    // Utilities
    const utilitiesContext = document.getElementById('utilitiesCanvas').getContext('2d');

    new Chart(utilitiesContext, {
        data: {
            labels: [`${baseCapital.toUpperCase()}`, `${compareCapital.toUpperCase()}`],
            datasets: [
                {
                    type: 'line',
                    label: 'Basic House Utilities (Electricity, Water)',
                    data: [
                        document.querySelector('.utilitiesBaseTownCost1').innerHTML,
                        document.querySelector('.utilitiesCompareTownCost1').innerHTML
                    ],
                    borderWidth: 1
                },
                {
                    type: 'bar',
                    label: 'Internet Costs Per Month',
                    data: [
                        document.querySelector('.utilitiesBaseTownCost2').innerHTML,
                        document.querySelector('.utilitiesCompareTownCost2').innerHTML
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: `UTILITIES COMPARISON BETWEEN ${baseCapital.toUpperCase()} AND ${compareCapital.toUpperCase()}`
                }
            }
        }
    });

}    