// INPUT
const inputEl = document.querySelector(".form_input__whatName");
const inputContainerEl = document.querySelector(".form_input__container");
const outPutEl = document.querySelector(".output");
const outPutValueEl = document.querySelector(".outputValue");
// TIME
const timeEl = document.querySelector(".dockBar__time");
const dockTimeScreenEl = document.querySelector(".dockBar_timeScreen");
// WEATHER
const weatherEl = document.querySelector(".dockBar__weather");
const dockWeatherScreenEl = document.querySelector(".dockBar_weatherScreen");

// Background Change ---> input 연결
let toggle = true;
function bodyWindowChange(event) {
  if (event.key === "Enter") {
    if (toggle) {
      document.body.style.backgroundImage =
        'url("../images/richard-horvath-RAZU_R66vUc-unsplash.jpg")';
      document.body.style.transition = ".5s";
    } else {
      document.body.style.backgroundImage =
        'url("../images/li-zhang-K-DwbsTXLIY-unsplash.jpg")';
      document.body.style.transition = ".5s";
    }
  }
}
// input Change
function inputChange(event) {
  if (event.key === "Enter") {
    inputContainerEl.classList.add("trans");
    outPutEl.textContent = `Hello !`;
    outPutEl.classList.add("show");
    outPutValueEl.textContent = `${inputEl.value}님 반갑습니다.`;
    outPutValueEl.classList.add("show");
  }
}
// TIME
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
// dockTimeScreen section
function bodyWindowPress() {
  dockTimeScreenEl.classList.toggle(".active");
  if (dockTimeScreenEl.classList.contains(".active")) {
    dockTimeScreenEl.classList.add("active");
    dockTimeScreenEl.innerHTML = `<div class="time-display">${updateTime()}</div>`;
  } else {
    dockTimeScreenEl.classList.remove("active");
    dockTimeScreenEl.innerHTML = "";
  }
}
// Time update
intervalId = setInterval(() => {
  dockTimeScreenEl.querySelector(".time-display").textContent = updateTime();
}, 1000);
// dockWeatherScreen section
function bodyWindowWeather() {
  dockWeatherScreenEl.classList.toggle(".active");
  if (dockWeatherScreenEl.classList.contains(".active")) {
    dockWeatherScreenEl.classList.add("active");
  } else {
    dockWeatherScreenEl.classList.remove("active");
    dockWeatherScreenEl.innerHTML = "";
  }
}
// Event Trigger
inputEl.addEventListener("keydown", inputChange);
inputEl.addEventListener("keydown", bodyWindowChange);
timeEl.addEventListener("click", bodyWindowPress);
weatherEl.addEventListener("click", bodyWindowWeather);
