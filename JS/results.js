// Using JQuey to get persisted data from local storage
$(document).ready(function() {

    // Get local storage persisted data
    var key = 'searchData';

    var searchData = JSON.parse(window.localStorage.getItem(key));

    var baseTownData = searchData.baseTownData;
    var compareTownData = searchData.compareTownData;

    // Manipulate DOM with data from local storage
    document.getElementById('bTData').innerHTML = baseTownData;
    document.getElementById('cTData').innerHTML = compareTownData;

});