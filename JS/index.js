// For the type writer animation
var type = new Typed(".typewriter", {
    strings: ["<span class='dollar'>_.</span>comparator<span class='dollar'>_.</span>"],
    typeSpeed: 110,
    backSpeed: 100,
    loop: true
});

// To get country data from the API
const countryFactsUrlAfrica = "https://country-facts.p.rapidapi.com/region/africa";
const countryFactsUrlAll = "https://country-facts.p.rapidapi.com/all";

const settings = {
    "async": true,
    "crossDomain": true,
    "url": countryFactsUrlAfrica,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": XRapidApiHost
    }
};

// Check if page is ready then perform API request to manipulate the DOM accordingly
$(document).ready(function () {
    $.ajax(settings).done(function (response) {
        console.log(response);

        // Get base town text and replace with API country
        const baseTown = document.getElementById('baseTownSelected');
        var baseResponse = response[5];
        var baseCountry = baseResponse.altSpellings[1];
        var baseCapital = baseResponse.capital[0];
        baseTown.innerHTML = baseCapital + ", " + baseCountry;

        // Get base town text and replace with API country
        const compareTown = document.getElementById('compareTownSelected');
        var compareResponse = response[20];
        var compareCountry = compareResponse.altSpellings[1];
        var compareCapital = compareResponse.capital[0];
        compareTown.innerHTML = compareCapital + ", " + compareCountry;

    });
});