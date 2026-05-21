const containerPhotoEl = document.querySelector(".container-photo");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  getRandomPhoto();
});

function getRandomPhoto() {
  for (let i = 0; i < 5; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`;
    containerPhotoEl.appendChild(newImgEl);
  }
}
