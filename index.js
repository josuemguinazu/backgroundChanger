//traigo elem body del html
let body = document.querySelector('.body');

// btn cambiar color fondo
const changeColorBtn = document.querySelector('#changeColorBtn');
changeColorBtn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let backgroundColor = `rgb(${x},${y},${z})`;
  document.body.style.background = backgroundColor;
  console.log(`background color: ${backgroundColor}`); // para ver el color en consola
}

// btn cambiar color letra
const changeColorLtr = document.querySelector('#changeColorLtr');
changeColorLtr.addEventListener('click', changeLtrColor);

const letraColor = document.querySelector('.letraColor');

function changeLtrColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let changeletraColor = `rgb(${x},${y},${z})`;
  letraColor.style.color = changeletraColor;
  console.log(`letter color: ${changeletraColor}`);
}

// btn clickME
const clickMe = document.querySelector('#clickMe');
clickMe.addEventListener('click', () => {
  alert('In the console you can see the RGB code of the generated color.');
});
