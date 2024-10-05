var encodedData = window.location.search.substr(1);
var newRow = JSON.parse(decodeURIComponent(encodedData));
console.log(newRow);
console.log("reached new page");