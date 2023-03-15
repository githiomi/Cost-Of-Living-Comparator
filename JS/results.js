// Get local storage persisted data
var key = 'searchData';
var searchData = JSON.parse(window.localStorage.getItem(key));

var baseCapital = searchData.baseCapital;
var baseCountry = searchData.baseCountry;
var compareCapital = searchData.compareCapital;
var compareCountry = searchData.compareCountry;

console.log(`Base Capital: ${baseCapital}`);
console.log(`Base Country: ${baseCountry}`);
console.log(`Compare Capital: ${compareCapital}`);
console.log(`Compare Country: ${compareCountry}`);

// Manipulate DOM with data from local storage
document.getElementById('bTData').innerHTML = baseCapital + ", " + baseCountry;
document.getElementById('cTData').innerHTML = compareCapital + ", " + compareCountry;

// Enter town names into accordion titles
$('.accordionBaseTownName').each( function () {
    // Not working
    console.log("Ready ---" + baseCapital)
    $(this).innerHTML = baseCapital;
})

$('.accordionCompareTownName').each(function () {
    // Not working
    console.log("Ready ---" + compareCapital)
    $(this).innerHTML = compareCapital;
})

//1st API Call Config
// To get country data from the API
const countryFactsUrlAfrica = "https://country-facts.p.rapidapi.com/region/africa";
const countryFactsUrlAll = "https://country-facts.p.rapidapi.com/all";

const factsRapidApiKey = apiKeysConfig.rapidApiKey;
const factsRapidApiHost = apiKeysConfig.countryFactsApiHost;

const factsSettings = {
    "async": true,
    "crossDomain": true,
    "url": countryFactsUrlAfrica,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": factsRapidApiKey,
        "X-RapidAPI-Host": factsRapidApiHost
    }
};
// 1st API Call Config End

// 2nd API Call Config
const rapidApiKey = apiKeysConfig.rapidApiKey;
const rapidApiHost = apiKeysConfig.costOfLivingApiHost;

// baseUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${baseCapital}&country_name=${baseCountry}`
baseUrl = "https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=Port%20Louis&country_name=Mauritius";
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

// compareUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${compareCapital}&country_name=${compareCountry}`;
compareUrl = "https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=Nairobi&country_name=Kenya";
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
    $.ajax(factsSettings).done( (response) => {
        console.log(response);

        // To get any country details
        function getCountry(countryName){
            let returnCountry;

            for (let c = 0; c < response.length; c++){
                if (countryName === response[c].name.common){
                    returnCountry = response[c];
                }
            }
            return returnCountry;
        }

        // To get the baseCountry
        baseCountryDetails = getCountry(baseCountry);
        compareCountryDetails = getCountry(compareCountry);

        // Manipulate DOM to contain country details
        // Base Country
        document.getElementById('c1Name').innerHTML = baseCountryDetails.name.common;
        document.getElementById('c1Capital').innerHTML = baseCountryDetails.capital[0];
        document.getElementById('c1Region').innerHTML = baseCountryDetails.subregion;
        document.getElementById('c1Population').innerHTML = baseCountryDetails.population;
        document.getElementById('c1Currency').innerHTML = baseCountryDetails.currencies;
        document.getElementById('c1Language').innerHTML = baseCountryDetails.languages;
        document.getElementById('c1Flag').src = baseCountryDetails.flag;

        // Compare Country
        document.getElementById('c2Name').innerHTML = compareCountryDetails.name.common;
        document.getElementById('c2Capital').innerHTML = compareCountryDetails.capital[0];
        document.getElementById('c2Region').innerHTML = compareCountryDetails.subregion;
        document.getElementById('c2Population').innerHTML = compareCountryDetails.population;
        document.getElementById('c2Currency').innerHTML = compareCountryDetails.currencies[0];
        document.getElementById('c2Language').innerHTML = compareCountryDetails.languages[0];
        document.getElementById('c2Flag').src = compareCountryDetails.flag;



    })

    // Perform 2nd API call to call info from 1st base country then 2nd compare country
    // $.ajax(baseSettings).done(function (baseResponse) {
    //     console.log(baseResponse);

    //     if (baseResponse.prices[2].currency_code == undefined) return;

    //     const baseCurr = baseResponse.prices[2].currency_code;
    //     const c1Edu = baseCurr + ". " + baseResponse.prices[2].avg;
    //     const c1Tran = baseCurr + ". " + baseResponse.prices[44].avg;
    //     const c1Hou = baseCurr + ". " + baseResponse.prices[26].avg;
    //     const c1Hou = baseCurr + ". " + baseResponse.prices[26].avg;
    //     const c1Uti = baseCurr + ". " + baseResponse.prices[48].avg;

    //     // Manipulate the DOM
    //     document.querySelector('.educationBaseTownCost1').innerHTML = c1Edu;
    //     document.querySelector('.c1Tran').innerHTML = c1Tran;
    //     document.querySelector('.c1Hou').innerHTML = c1Hou;
    //     document.querySelector('.c1Uti').innerHTML = c1Uti;

    // });

    // $.ajax(compareSettings).done(function (compareResponse) {
    //     console.log(compareResponse);
    //     const compareCurr = compareResponse.prices[2].currency_code;
    //     const c2Edu = compareCurr + ". " + compareResponse.prices[2].avg;;
    //     const c2Tran = compareCurr + ". " + compareResponse.prices[44].avg;
    //     const c2Hou = compareCurr + ". " + compareResponse.prices[26].avg;
    //     const c2Uti = compareCurr + ". " + compareResponse.prices[48].avg;

    //     // Manipulate the DOM
    //     document.querySelector('.educationCompareTownCost1').innerHTML = c2Edu;
    //     document.querySelector('.c2Tran').innerHTML = c2Tran;
    //     document.querySelector('.c2Hou').innerHTML = c2Hou;
    //     document.querySelector('.c2Uti').innerHTML = c2Uti;
    // });

});