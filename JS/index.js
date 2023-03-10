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

// const rapidApiKey = "c31d30f36dmshfb00c2a42e8204fp1b261fjsnf77ffe5266e4";
const rapidApiKey = apiKeysConfig.rapidApiKey;
const XRapidApiHost = apiKeysConfig.countryFactsApiHost;

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

        // Get dropdown divs
        const baseDropDown = document.querySelectorAll(".dropdowns")[0];
        for (let i = 0; i < response.length; i++) {

            // Create an 'a' tag
            newA = document.createElement("a");
            newA.classList.add("base-item");
            newA.classList.add("dropdown-item");

            // Add content to the dropdown item
            current = response[i];
            newA.appendChild(document.createTextNode(`${current.name.common}, ${current.capital[0]}`));

            // Add the 'a' to a list item
            newLi = document.createElement("li")
            newLi.appendChild(newA);

            // Add the new 'li' to the dropdown
            baseDropDown.appendChild(newLi);

        }
        
        const compareDropDown = document.querySelectorAll(".dropdowns")[1];
        for (let i = 0; i < response.length; i++) {

            // Create an 'a' tag
            newA = document.createElement("a");
            newA.classList.add("compare-item");
            newA.classList.add("dropdown-item");

            // Add content to the dropdown item
            current = response[i];
            newA.appendChild(document.createTextNode(`${current.name.common}, ${current.capital[0]}`));

            // Add the 'a' to a list item
            newLi = document.createElement("li")
            newLi.appendChild(newA);

            // Add the new 'li' to the dropdown
            compareDropDown.appendChild(newLi);

        }

        // When a dropdown item is clicked, fill the button
        // Base
        // Get base text display
        const baseText = document.getElementById('baseTownSelected');
        $('.base-item').each(function () {

            $(this).click(function () {
                // Change text to clicked
                baseText.innerHTML = $(this).text();
            });
        });
        // Compare
        // Get compare text display
        const compareText = document.getElementById('compareTownSelected');
        $('.compare-item').each(function () {

            $(this).click(function () {
                // Change text to clicked
                compareText.innerHTML = $(this).text();
            });
        });

    });

    // Add onclick listener to compare button
    const compareButton = document.getElementById('compareBtn');
    compareButton.addEventListener('click', () => {

        // Adding the search bar content to local storage
        var key = 'searchData';

        // Get base details
        const base = document.getElementById("baseTownSelected").textContent;
        baseCountry = base.split(',')[0];
        baseCapital = base.split(',')[1];

        // Get compare details
        const compare = document.getElementById("compareTownSelected").textContent;
        compareCountry = compare.split(',')[0];
        compareCapital = compare.split(',')[1];

        // Error handling
        if (baseCapital == undefined){
            alert('Please select a base country and its capital ????!');
            return;
        }

        if (compareCapital == undefined){
            alert('Please select a compare country and its capital ????!');
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