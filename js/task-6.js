function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '8px';
    box.style.border = '1px solid #ccc';

    boxes.push(box);
    size += 10;
  }

  destroyBoxes();
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
