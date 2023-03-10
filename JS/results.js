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
$('.accordionBaseTownName').each(() => {
    // Not working
    console.log("Ready ---" + baseCapital)
    $(this).innerHTML = baseCapital;
})

$('.accordionCompareTownName').each(() => {
    // Not working
    console.log("Ready ---" + compareCapital)
    $(this).innerHTML = compareCapital;
})

// API Config
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

// Using JQuey to get persisted data from local storage
$(document).ready(function () {

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