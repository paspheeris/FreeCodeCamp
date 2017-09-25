// import { currentTempDiv } from './domInteractions.js';
const currentTempDiv = require('./domInteractions.js');

//cachedData will hold all the data retrieved from the API
let cachedData;
//default temp. scale is fahrenheit
let scale = "fahrenheit";

navigator.geolocation.getCurrentPosition(position => {
  lat = position.coords.latitude;
  long = position.coords.longitude;

  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/502110c7a4981f8355529b2f656802e5/${lat},${long}`)
    .then(response => {
      return response.json();
    })
    .then(parsedData => {
      cachedData = parsedData;
      setCurrentTemp(parsedData, scale, currentTempDiv);
      setCurrentWeather(parsedData);
      setWeekWeather(parsedData);
      return parsedData;

    });
}, err => { alert("Please allow geolocation") });

setCurrentTemp(data, scale, domNode)
function setCurrentTemp(data, scale) {
  currentTime = new Date();
  let temp;
  //is scale is in celsius, convert to fahrenheit, otherwise set temp as given
  (scale === "celsius") ? temp = (data.currently.temperature - 32) * (5 / 9) : temp = data.currently.temperature;
  domNode.innerHTML = `
    <div class="left">
        <div class="current-temp-value">
            ${Math.floor(temp)}&#176
        </div>
        <div class="current-time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
    </div>
    <div class="right">
        <div class="toggle">
            F&#176<br /> C&#176
        </div>
        
    </div>
    `
  let toggle;
  toggle = document.querySelector('.toggle');
  // console.log(toggle);
  if (toggle !== "undefined") {
    toggle.addEventListener('click', function () {
      // console.log('in');
      (scale === "fahrenheit") ? scale = "celsius" : scale = "fahrenheit";
      //  console.log(scale);
      setCurrentTemp(cachedData, scale);
      setWeekWeather(cachedData, scale);
    });
  }
}
function setCurrentWeather(data) {
  currentWeather.innerHTML = `
        <img class="current-weather-image" src="./images/${data.currently.icon}.svg">
        <span class="current-weather-summary">${data.currently.summary}
        </span>
    `
}
function setWeekWeather(data, scale) {
  console.log(data);
  weekDaysNodeList.forEach((day, index) => {
    let tempMax;
    (scale === "celsius") ? tempMax = (data.daily.data[index].temperatureMax - 32) * (5 / 9) : tempMax = data.daily.data[index].temperatureMax;
    let tempMin;
    (scale === "celsius") ? tempMin = (data.daily.data[index].temperatureMin - 32) * (5 / 9) : tempMin = data.daily.data[index].temperatureMin;
    //   day.innerHTML = `
    //       Mon
    //       <img src="./images/${data.daily.data[index].icon}.svg">
    //       <span class="max">${Math.floor(tempMax)}
    //       </span>
    //       ${Math.floor(tempMin)}
    //   `
    // })
    // weekDayWrapper.appendChild('di')
  })
}
// function createDayWeatherDiv(tempMax, tempMin)