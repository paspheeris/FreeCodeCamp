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
      createCurrentTempDiv(parsedData, scale, currentTempDiv);
      setCurrentWeather(parsedData);
      setWeekWeather(parsedData);
      registerToggleListener(cachedData, scale);
      return parsedData;

    });
}, err => { alert("Please allow geolocation") });
function getFormattedTemp(temperatureInF, scale) {
  return Math.floor(scale === "celsius"
    ? (temperatureInF - 32) * (5 / 9)
    : temperatureInF)
}
function createCurrentTempDiv(data, scale, domNode) {
  currentTime = new Date();
  const temperature = getFormattedTemp(data.currently.temperature, scale);
  console.log(domNode);
  domNode.innerHTML = currentTempDivMarkup(temperature, scale);
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