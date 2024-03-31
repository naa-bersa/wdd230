// 1. Fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
    try {
        
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=46.78174968569931&lon=7.920334054252698&appid=7375f0b41a3f7a8f03520c6605f03466`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// 2. Update UI with weather information
function updateWeatherUI(weatherData) {
    const weatherIcon = document.getElementById('weather-icon');
    const weatherDescription = document.querySelector('.weather-container figcaption');
    const currentTemp = document.getElementById('current-temp');

    if (weatherData) {
        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        const description = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;

        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        weatherDescription.textContent = description;
        currentTemp.textContent = `${temperature}°C`;
    } else {
        // Handle error or no data
    }
}

// Entry point - fetch data and update UI
async function initializePage() {
    const weatherData = await fetchWeatherData();
    updateWeatherUI(weatherData);
}

// Call initializePage when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializePage);