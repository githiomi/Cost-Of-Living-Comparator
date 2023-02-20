// Using JQuey to get persisted data from local storage
$(document).ready(function () {

    // Get local storage persisted data
    var key = 'searchData';
    var searchData = JSON.parse(window.localStorage.getItem(key));

    var baseCapital = searchData.baseCapital;
    var baseCountry = searchData.baseCountry;
    var compareCapital = searchData.compareCapital;
    var compareCountry = searchData.compareCountry;

    // Manipulate DOM with data from local storage
    document.getElementById('bTData').innerHTML = baseCapital + ", " + baseCountry;
    document.getElementById('cTData').innerHTML = compareCapital + ", " + compareCountry;

    // Second API call to get the country data
    const costOfLivingCitiesUrl = "https://cost-of-living-and-prices.p.rapidapi.com/cities";
    const rapidApiKey = "a6501f3a61msh9175d3e50307254p170f58jsn5328327f4f0d";
    const XRapidApiHost = "cost-of-living-and-prices.p.rapidapi.com";

    baseUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${baseCapital}&country_name=${baseCountry}`
    const baseSettings = {
        "async": true,
        "crossDomain": true,
        "url": baseUrl,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": XRapidApiHost
        }
    };

    compareUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${compareCapital}&country_name=${compareCountry}`;
    const compareSettings = {
        "async": true,
        "crossDomain": true,
        "url": compareUrl,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": XRapidApiHost
        }
    };

    // Perform 2nd API call to call info from 1st base country then 2nd compare country
    $.ajax(baseSettings).done(function (baseResponse) {
        console.log(baseResponse);
        $.ajax(compareSettings).done(function (compareResponse) {
            console.log(compareResponse);
        });
    });

});