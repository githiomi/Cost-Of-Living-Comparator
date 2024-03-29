// Get local storage persisted data
var key = 'searchData';
var searchData = JSON.parse(window.localStorage.getItem(key));

var baseCapital = searchData.baseCapital.trim();
var baseCountry = searchData.baseCountry;
var compareCapital = searchData.compareCapital.trim();
var compareCountry = searchData.compareCountry;

// Manipulate DOM with data from local storage
document.getElementById('bTData').innerHTML = baseCapital + ", " + baseCountry;
document.getElementById('cTData').innerHTML = compareCapital + ", " + compareCountry;

// Update accordion titles with town names
let baseCapitals = document.querySelectorAll('.accordionBaseTownName');
let compareCapitals = document.querySelectorAll('.accordionCompareTownName');

for (let i = 0; i < baseCapitals.length; i++) {
    document.querySelectorAll('.accordionBaseTownName')[i].innerHTML = baseCapital;
    document.querySelectorAll('.accordionCompareTownName')[i].innerHTML = compareCapital;
}

//  1st API Call Config
// To get country data from the API
const countryFactsUrlAll = "https://country-facts.p.rapidapi.com/all";

// const factsRapidApiKey = apiKeysConfig.factsRapidApiKey;
// const factsRapidApiHost = apiKeysConfig.factsApiHost;

const factsRapidApiKey = 'ae0503632cmshf55a0292cd3b5fbp17d4a3jsn2aa3340d9736';
const factsRapidApiHost = 'country-facts.p.rapidapi.com';

const factsSettings = {
    "async": true,
    "crossDomain": true,
    "url": countryFactsUrlAll,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": factsRapidApiKey,
        "X-RapidAPI-Host": factsRapidApiHost
    }
};
// 1st API Call Config End

// 2nd API Call Config
// const rapidApiKey = apiKeysConfig.pricesRapidApiKey;
// const rapidApiHost = apiKeysConfig.pricesApiHost;

const rapidApiKey = 'ae0503632cmshf55a0292cd3b5fbp17d4a3jsn2aa3340d9736';
const rapidApiHost = 'cost-of-living-and-prices.p.rapidapi.com';

let baseUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${baseCapital}&country_name=${baseCountry}`;
const baseSettings = {
    "async": true,
    "crossDomain": true,
    "url": baseUrl,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": rapidApiHost
    }
};

let compareUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${compareCapital}&country_name=${compareCountry}`;
const compareSettings = {
    "async": true,
    "crossDomain": true,
    "url": compareUrl,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": rapidApiHost
    }
};
// 2nd API Call Config End

// JQuery Functionality when page is loaded
$(document).ready(function () {

    // Perform 1st API Call to Facts API
    $.ajax(factsSettings).done((response) => {

        // To get any country details
        function getCountry(countryName) {
            let returnCountry;

            for (let c = 0; c < response.length; c++) {
                if (countryName === response[c].name.common) {
                    returnCountry = response[c];
                }
            }
            return returnCountry;
        }

        // To get the baseCountry
        const baseCountryDetails = getCountry(baseCountry);
        const compareCountryDetails = getCountry(compareCountry);

        // Manipulate DOM to contain country details
        // Base Country
        document.getElementById('c1Name').innerHTML = baseCountryDetails.name.official;
        document.getElementById('c1Capital').innerHTML = baseCountryDetails.capital[0];
        document.getElementById('c1Region').innerHTML = baseCountryDetails.subregion;
        document.getElementById('c1Population').innerHTML = baseCountryDetails.population;

        let bLatitude = baseCountryDetails.latlng[0];
        let bLongitude = baseCountryDetails.latlng[1];
        document.getElementById('c1Coordinates').innerHTML = `Lat: ${bLatitude}, Long: ${bLongitude}`;
        // Add onclick listener to open map
        document.getElementById('c1Coordinates').setAttribute('href', `https://maps.google.com/?q=${bLatitude}, ${bLongitude}`);

        document.getElementById('c1Flag').src = baseCountryDetails.flag;

        // Add base map
        let baseMap = L.map('baseMap').setView([bLatitude, bLongitude], 8);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(baseMap);

        L.marker([bLatitude, bLongitude]).addTo(baseMap)
            .bindPopup(`${baseCountryDetails.name.official}`)
            .openPopup();

        // Compare Country
        document.getElementById('c2Name').innerHTML = compareCountryDetails.name.official;
        document.getElementById('c2Capital').innerHTML = compareCountryDetails.capital[0];
        document.getElementById('c2Region').innerHTML = compareCountryDetails.subregion;
        document.getElementById('c2Population').innerHTML = compareCountryDetails.population;
        let cLatitude = compareCountryDetails.latlng[0];
        let cLongitude = compareCountryDetails.latlng[1];
        document.getElementById('c2Coordinates').innerHTML = `Lat: ${cLatitude}, Long: ${cLongitude}`;

        // Add onclick listener to open map
        document.getElementById('c2Coordinates').setAttribute('href', `https://maps.google.com/?q=${cLatitude}, ${cLongitude}`);

        document.getElementById('c2Flag').src = compareCountryDetails.flag;

        // Add compare map
        let compareMap = L.map('compareMap').setView([cLatitude, cLongitude], 8);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(compareMap);

        L.marker([cLatitude, cLongitude]).addTo(compareMap)
            .bindPopup(`${compareCountryDetails.name.official}`)
            .openPopup();

    });

    // Function to get data from the country array
    function getData(currency, response, itemId) {
        let responseItem = response.prices[itemId];

        if (responseItem == null || responseItem == undefined) return "Not Provided";

        return `${parseFloat(responseItem.usd.avg)}`;
    }

    // Function to update the DOM
    function updateDOM(element, content) {
        if (element == null) return "Undefined";

        element.innerHTML = content;
    };

    // Perform 2nd API call to call info from 1st base country then 2nd compare country
    $.ajax(baseSettings).done(function (baseResponse) {

        const baseCurr = baseResponse.prices[0].currency_code;
        // Add currency to country details
        document.getElementById('c1Currency').innerHTML = baseCurr;

        // Get price info
        const c1EduA = getData(baseCurr, baseResponse, 2);
        const c1EduB = getData(baseCurr, baseResponse, 3);
        const c1FoodA = getData(baseCurr, baseResponse, 20);
        const c1FoodB = getData(baseCurr, baseResponse, 15);
        const c1TranA = getData(baseCurr, baseResponse, 40);
        const c1TranB = getData(baseCurr, baseResponse, 42);
        const c1HouA = getData(baseCurr, baseResponse, 26);
        const c1HouB = getData(baseCurr, baseResponse, 28);
        const c1UtiA = getData(baseCurr, baseResponse, 48);
        const c1UtiB = getData(baseCurr, baseResponse, 49);

        // Manipulate the DOM
        updateDOM(document.querySelector('.educationBaseTownCost1'), c1EduA);
        updateDOM(document.querySelector('.educationBaseTownCost2'), c1EduB);
        updateDOM(document.querySelector('.foodBaseTownCost1'), c1FoodA);
        updateDOM(document.querySelector('.foodBaseTownCost2'), c1FoodB);
        updateDOM(document.querySelector('.transportBaseTownCost1'), c1TranA);
        updateDOM(document.querySelector('.transportBaseTownCost2'), c1TranB);
        updateDOM(document.querySelector('.housingBaseTownCost1'), c1HouA);
        updateDOM(document.querySelector('.housingBaseTownCost2'), c1HouB);
        updateDOM(document.querySelector('.utilitiesBaseTownCost1'), c1UtiA);
        updateDOM(document.querySelector('.utilitiesBaseTownCost2'), c1UtiB);

    });

    $.ajax(compareSettings).done(function (compareResponse) {

        const compareCurr = compareResponse.prices[0].currency_code;
        // Add currency to country details
        document.getElementById('c2Currency').innerHTML = compareCurr;

        // Get price info
        const c2EduA = getData(compareCurr, compareResponse, 2);
        const c2EduB = getData(compareCurr, compareResponse, 3);
        const c2FoodA = getData(compareCurr, compareResponse, 20);
        const c2FoodB = getData(compareCurr, compareResponse, 15);
        const c2TranA = getData(compareCurr, compareResponse, 40);
        const c2TranB = getData(compareCurr, compareResponse, 42);
        const c2HouA = getData(compareCurr, compareResponse, 26);
        const c2HouB = getData(compareCurr, compareResponse, 28);
        const c2UtiA = getData(compareCurr, compareResponse, 48);
        const c2UtiB = getData(compareCurr, compareResponse, 49);

        // Manipulate the DOM
        updateDOM(document.querySelector('.educationCompareTownCost1'), c2EduA);
        updateDOM(document.querySelector('.educationCompareTownCost2'), c2EduB);
        updateDOM(document.querySelector('.foodCompareTownCost1'), c2FoodA);
        updateDOM(document.querySelector('.foodCompareTownCost2'), c2FoodB);
        updateDOM(document.querySelector('.transportCompareTownCost1'), c2TranA);
        updateDOM(document.querySelector('.transportCompareTownCost2'), c2TranB);
        updateDOM(document.querySelector('.housingCompareTownCost1'), c2HouA);
        updateDOM(document.querySelector('.housingCompareTownCost2'), c2HouB);
        updateDOM(document.querySelector('.utilitiesCompareTownCost1'), c2UtiA);
        updateDOM(document.querySelector('.utilitiesCompareTownCost2'), c2UtiB);

    });

});