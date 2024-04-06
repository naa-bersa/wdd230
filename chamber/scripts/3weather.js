const apiUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=46.78174968569931&lon=7.920334054252698&appid=7375f0b41a3f7a8f03520c6605f03466";
const day_one = document.querySelector("#day_one");
const day_two = document.querySelector("#day_two");
const day_three = document.querySelector("#day_three");
async function Getdata() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data.list);

  const infoOne = `<div id="one">
  <p>${data.list[0].dt_txt}</p>
  <p>${data.list[0].weather[0].description}</p>

  <p>${data.list[0].main.temp}F</p>
  </div>`;
  day_one.innerHTML = infoOne;

  const infoTwo = `<div id="two">
  <p>${data.list[6].dt_txt}</p>
  <p>${data.list[6].weather[0].description}</p>

  <p>${data.list[6].main.temp}F</p>
  </div>`;
  day_two.innerHTML = infoTwo;

  const infoThree = `<div id="three">
  <p>${data.list[14].dt_txt}</p>
  <p>${data.list[14].weather[0].description}</p>

  <p>${data.list[14].main.temp}F</p>
  </div>`;
  day_three.innerHTML = infoThree;
}

Getdata();
