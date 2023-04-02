const API_KEY = `d5e7ade0d6630b94fcb778351fc3a6d0`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  // const temperature = document.getElementById('temperature');
  // temperature.innerText = data.main.temp;
  // console.log(data.weather[0].main);

  //set clouds

  // const clouds = document.getElementById('cloud');
  // clouds.innerText = data.weather[0].main;

  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("cloud", data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  const display = document.getElementById(id);
  display.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const cityName = searchField.value;

  //set city

  document.getElementById("city").innerText = cityName;
  loadTemperature(cityName);
});

loadTemperature("dhaka");
