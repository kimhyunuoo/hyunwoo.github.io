// INPUT
const inputEl = document.querySelector(".form_input__whatName");
// TIME
const timeEl = document.querySelector(".dockBar__time");
const dockTimeScreenEl = document.querySelector(".dockBar_timeScreen");

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
function bodyWindowPress() {
  dockTimeScreenEl.classList.toggle(".active");
  if (dockTimeScreenEl.classList.contains(".active")) {
    dockTimeScreenEl.classList.add("active");
  } else {
    dockTimeScreenEl.classList.remove("active");
  }
}

inputEl.addEventListener("keydown", bodyWindowChange);
timeEl.addEventListener("click", bodyWindowPress);
