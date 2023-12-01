function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
})

console.log(input.value)

 destroyButton.addEventListener('click', () => {
   destroyBoxes.call();
})

