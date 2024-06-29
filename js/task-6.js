function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

function createBox(amount) {
  boxContainer.innerHTML = '';

  let size = 30;

  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(box);
  size += 10;
  }
  boxContainer.appendChild(fragment);
}

createButton.addEventListener('click', createListen);

function createListen() {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBox(amount)
    input.value = '';
  } 
};

destroyButton.addEventListener('click', destroyListen);

function destroyListen() {
  boxContainer.innerHTML = '';
};