const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 
'https://api.openweathermap.org/data/2.5/weather?lat=49.74760363541236&lon=6.635711776498434&units=imperial&appid=7375f0b41a3f7a8f03520c6605f03466'
async function apiFetch() {
try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);

        console.log(data.weather.main)
    } else{
        throw Error(await response.text());
    }
    
} catch (error) {
    console.log(error);
}
};


function displayResults(weatherData){
currentTemp.innerHTML = `${weather.main.temp.tofixed(0)}&degF`;
const iconsrc = `https://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`;
let desc = weatherData.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}
 apiFetch();