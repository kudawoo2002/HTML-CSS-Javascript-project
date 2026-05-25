const searchBarEl = document.querySelector(".search-bar-container");
const searchImgEl = document.querySelector(".search-img");

searchImgEl.addEventListener("click", () => {
  searchBarEl.classList.remove("active");
});
