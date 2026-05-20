const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPost = event.offsetX;
  const yPost = event.offsetY;
  const spanEl = document.createElement("span");

  spanEl.style.left = xPost + "px";
  spanEl.style.top = yPost + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
