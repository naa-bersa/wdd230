const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.78174968569931&lon=7.920334054252698&appid=7375f0b41a3f7a8f03520c6605f03466';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Access the forecast data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });