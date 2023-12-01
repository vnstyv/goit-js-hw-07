
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const body = document.body;
const colorSpan = document.querySelector('.color');

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = body.style.backgroundColor;
});

