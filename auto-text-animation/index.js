containerEl = document.querySelector(".container");

let careerIndex = 0;
let charartersIndex = 0;
const careers = [
  "Youtuber",
  "Developer",
  "Freelancer",
  "Instrustor",
  "Designer",
];

animateText();

function animateText() {
  containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, charartersIndex)}</h1>`;
  charartersIndex++;

  if (charartersIndex === careers[careerIndex].length + 1) {
    careerIndex++;
    charartersIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(animateText, 400);
}
