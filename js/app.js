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
const API_KEY = "a3a5d593038ea39027a6962fdf659257";
//TODOLIST
const todoListEl = document.querySelector(".dockBar__todolist");
const dockTodoListScreenEl = document.querySelector(".dockBar_todolistScreen");
const toDoFormEl = document.querySelector(".toDoForm");
const toDoInputEl = toDoFormEl.querySelector("input");
const toDoListEl = document.querySelector(".toDoList");
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
  }
}
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherEl = document.querySelector(".dockBar_weatherScreen .wea");
      const cityEl = document.querySelector(".dockBar_weatherScreen .city");
      const maxtempEl = document.querySelector(
        ".dockBar_weatherScreen .maxtem"
      );
      const mintempEl = document.querySelector(
        ".dockBar_weatherScreen .mintem"
      );
      cityEl.innerText = data.name;
      weatherEl.innerText = data.weather[0].main;
      const max = data.main.temp_max;
      maxtempEl.innerText = `최고온도 : ${max}°C`;
      const min = data.main.temp_min;
      mintempEl.innerText = `최저온도 : ${min}°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

function bodyWindowTodoList() {
  dockTodoListScreenEl.classList.toggle(".active");
  if (dockTodoListScreenEl.classList.contains(".active")) {
    dockTodoListScreenEl.classList.add("active");
  } else {
    dockTodoListScreenEl.classList.remove("active");
  }
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function printToDo(newToDoEl) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDoEl;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoListEl.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDoEl = toDoInputEl.value;
  toDoInputEl.value = "";
  printToDo(newToDoEl);
}

// Event Trigger
inputEl.addEventListener("keydown", inputChange);
inputEl.addEventListener("keydown", bodyWindowChange);
timeEl.addEventListener("click", bodyWindowPress);
weatherEl.addEventListener("click", bodyWindowWeather);
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
todoListEl.addEventListener("click", bodyWindowTodoList);
toDoFormEl.addEventListener("submit", handleToDoSubmit);
