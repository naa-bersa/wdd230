// get current year
const currentYearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy; ${currentYear}`;


// get last modified date
// document.getElementById("lastModifiedId");
const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
// lastModifiedElement.innerHTML = "last Modified: " + lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;