function perfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum == num && num != 0;
}

function checkNumber() {
  const number = document.getElementById('numberInput').value;
  const result = document.getElementById('result');
  if (perfectNumber(number)) {
    result.textContent = number + ' Er et perfekt tall';
    result.style.color = 'green';
  } else {
    result.textContent = number + ' Er ikke et perfekt tall';
    result.style.color = 'red';
  }
}

function randomNumber() {
  const randonNum = Math.floor(Math.random() * 100)
  document.getElementById('numberInput').value = randonNum;
  checkNumber();
}

function setColorPicker() {
  const color = document.getElementById('colorPicker').value;
  document.body.style.background = color;
}

function setRgbColor() {
  const r = document.getElementById('redSlide').value;
  const g = document.getElementById('greenSlide').value;
  const b = document.getElementById('blueSlide').value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function setColor() {
  const color = document.getElementById('colorInput').value;
  document.body.style.background = color;
}

function randomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}