/*!
 * Copyright (c) 2024 Mo Tiltmann
 * Licensed under the GNU General Public License v3 (GPLv3).
 * See the LICENSE file for details.
 */

let number_matrix = document.querySelector("#numbermatrix");
let matrix_IDK = 100;


GenerateField();


function GenerateField() {
  let matrixHTML = `<button class="strikethrough">1</button>`;
  for (let index = 1; index < matrix_IDK; index++) {
    matrixHTML += `<button id="Button-${index + 1}" class="Number-Button" onclick="onclickevent(${index + 1})">${index + 1}</button>`;
  }
  number_matrix.innerHTML = matrixHTML;
}

function getDivisibleNumbers(x) {
  let result = [];
  for (let i = x+1; i <= matrix_IDK; i++) {
    if (i % x === 0) {
      result.push(i);
    }
  }
  return result;
}

function setButton(ButtonNumber, content) {
  if (content == "strikethrough") {
    document.querySelector(`#Button-${ButtonNumber}`).classList.add("strikethrough")
  } else {
    document.querySelector(`#Button-${ButtonNumber}`).innerHTML = content;
  }
}

function onclickevent(number) {
  //console.log("Clicked "+number);
  
  try {
    document.querySelector(".ActiveNumber").classList.remove("ActiveNumber");
  } catch (error) {}

  Divisible = getDivisibleNumbers(number);
  Divisible.forEach(element => {
    setButton(element, "strikethrough");
  });
  document.querySelector(`#Button-${number}`).classList.add("ActiveNumber");

};

document.querySelector("#Board-Size-Input").addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
      matrix_IDK = document.querySelector("#Board-Size-Input").value;
      GenerateField();
  }
});

function ResetBoard() {
  const ButtonArray = document.querySelectorAll(".Number-Button");
  ButtonArray.forEach((button) => {
    button.classList.remove("strikethrough");
  });
};