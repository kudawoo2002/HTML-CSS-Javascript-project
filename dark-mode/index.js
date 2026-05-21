const bodyEl = document.querySelector("body");
const darkModeInputEl = document.querySelector("#dark-mode-toggle");

darkModeInputEl.checked = JSON.parse(localStorage.getItem("mode"));
toggleDarkMode();

darkModeInputEl.addEventListener("change", (event) => {
  toggleDarkMode();
  localStorageDarkMode();
});

function toggleDarkMode() {
  if (darkModeInputEl.checked) {
    const darkMode = (bodyEl.style.backgroundColor = "#000");
  } else {
    bodyEl.style.backgroundColor = "#fff";
  }
}

function localStorageDarkMode() {
  localStorage.setItem("mode", JSON.stringify(darkModeInputEl.checked));
}
