// For the type writer animation
var type = new Typed(".typewriter", {
    strings: ["<span class='dollar'>_.</span>comparator<span class='dollar'>_.</span>"],
    typeSpeed: 110,
    backSpeed: 100,
    loop: true
});

// To get country data from the API
const countryFactsUrlAll = "https://country-facts.p.rapidapi.com/all";

const rapidApiKey = apiKeysConfig.factsRapidApiKey;
const XRapidApiHost = apiKeysConfig.factsApiHost;

const settings = {
    "async": true,
    "crossDomain": true,
    "url": countryFactsUrlAll,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": XRapidApiHost
    }
};

// Check if page is ready then perform API request to manipulate the DOM accordingly
$(document).ready(function () {

    // List to store all retrieved countries
    let countries = [];

    // Make API call to retrieve all the countries
    $.ajax(settings).done(function (response) {

        // Get all countries and add them to the countries list
        for (let c = 0; c < response.length; c++) {
            let current = response[c];
            let country = {
                name: current.name.common,
                capital: current.capital[0]
            }
            countries[c] = country;
        }

        console.log(countries);  // log all countries in the console

        // Get the template
        const baseTemplate = document.querySelector('[data-base-item-template');
        const compareTemplate = document.querySelector('[data-compare-item-template');

        function createBaseElement(container, countries) {

            for (let i = 0; i < countries.length; i++) {

                let template = baseTemplate.content.cloneNode(true);
                let itemName = template.querySelector('[data-base-item');

                currentCountry = countries[i];
                itemName.textContent = `${currentCountry.name}, ${currentCountry.capital}`;
                container.append(template);

            }
        }

        function createCompareElement(container, countries) {

            for (let i = 0; i < countries.length; i++) {

                let template = compareTemplate.content.cloneNode(true);
                let itemName = template.querySelector('[data-compare-item');

                currentCountry = countries[i];
                itemName.textContent = `${currentCountry.name}, ${currentCountry.capital}`;
                container.append(template);

            }
        }

        // Get both country dropdowns and populate
        const baseDropDown = document.querySelector('[data-base-countries-container');
        createBaseElement(baseDropDown, countries)
        const compareDropDown = document.querySelector('[data-compare-countries-container');
        createCompareElement(compareDropDown, countries)

        // When a dropdown item is clicked, fill the button
        // Base selection
        const baseText = document.getElementById('baseTownSelected');
        $('.base-item').each(function () {

            $(this).click(function () {
                baseText.innerHTML = $(this).text();
            });
        });

        // Compare Selection
        const compareText = document.getElementById('compareTownSelected');
        $('.compare-item').each(function () {

            $(this).click(function () {
                compareText.innerHTML = $(this).text();
            });
        });

        // Filter functionality
        const baseSearchBar = document.getElementById('baseSearchBar').addEventListener("input", e => {
            console.log(e.target.value);
        });
        const compareSearchBar = document.getElementById('compareSearchBar').addEventListener("input", e => {
            console.log(e.target.value);
        })

    });

    // Add onclick listener to compare button
    const compareButton = document.getElementById('compareBtn');
    compareButton.addEventListener('click', () => {

        // Adding the search bar content to local storage
        var key = 'searchData';

        // Get base details
        const base = document.getElementById('baseTownSelected').textContent;
        baseCountry = base.split(',')[0];
        baseCapital = base.split(',')[1];

        // Get compare details
        const compare = document.getElementById('compareTownSelected').textContent;
        compareCountry = compare.split(',')[0];
        compareCapital = compare.split(',')[1];

        // Error handling
        if (baseCapital == undefined) {
            alert('Please select a base country and its capital 🤖!');
            return;
        }

        if (compareCapital == undefined) {
            alert('Please select a compare country and its capital 🤖!');
            return;
        }

        window.localStorage.setItem(key, JSON.stringify({
            baseCapital: baseCapital,
            baseCountry: baseCountry,
            compareCapital: compareCapital,
            compareCountry: compareCountry
        }));

        window.location.href = '../HTML/results.html';

    });

});