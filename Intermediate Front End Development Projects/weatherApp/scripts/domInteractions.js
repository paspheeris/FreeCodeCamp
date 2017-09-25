const currentTempDiv = document.querySelector('.current-temp-div');
const currentWeather = document.querySelector('.box2');
const weekDaysNodeList = document.querySelectorAll('.day-box');
const weekDayWrapper = document.querySelector('weekday-wrapper');

function currentTempDivMarkup(temperature) {
  return `
    <div class="left">
        <div class="current-temp-value">
            ${Math.floor(temperature)}&#176
        </div>
        <div class="current-time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
    </div>
    <div class="right">
        <div class="toggle">
            F&#176<br /> C&#176
        </div>
        
    </div>
    `;

}
function registerToggleListener(cachedData, scale, setCurrentTemp) {
  const toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', function () {
    scale = scale === "fahrenheit"
      ? "celsius"
      : "fahrenheit"
    setCurrentTemp(cachedData, scale);
    // setWeekWeather(cachedData, scale);
  });
  function setCurrentTemp(cachedData, scale) {
    const currentTempValueDiv = document.querySelector('.current-temp-value');
    currentTempValueDiv.innerText = `${getFormattedTemp(cachedData.currently.temperature, scale)}°`
  }
}