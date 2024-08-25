const inputEl = document.querySelector(".form_input__whatName");

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
inputEl.addEventListener("keydown", bodyWindowChange);
