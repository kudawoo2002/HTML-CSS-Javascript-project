const textAreaEl = document.getElementById("text-input");
const totalCharEl = document.querySelector(".total-count");
const remainingCharEl = document.querySelector(".remain");

maxLenght = textAreaEl.getAttribute("maxlength");
remainingCharEl.innerText = maxLenght;

textAreaEl.addEventListener("keyup", (event) => {
  totalCharEl.innerText = event.target.value.length;
  updateRemainingChar();
});

function updateRemainingChar() {
  remainingCharEl.innerText = maxLenght - textAreaEl.value.length;
}
