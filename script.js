const container = document.querySelector(".container");

const button = document.querySelector("#button");

function loadGrid(squares) {
  for (let i = 1; i <= squares * squares; i++) {
    let div = document.createElement("div");
    let height = 960 / squares;
    let width = 960 / squares;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.classList.add("grid");
    container.appendChild(div);
  }
  let gridDiv = document.querySelectorAll(".grid");

  // ADD EVENT LISTENERS FOR EACH GRID
  gridDiv.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("hover");
    });
  });
}

document.addEventListener("DOMContentLoaded", loadGrid(16));

button.addEventListener("click", createNewGrid);

function createNewGrid() {
  let squares = parseInt(prompt(`Enter number of squares: `));
  if (squares < 2) {
    alert("more than 2 squares needed");
  } else if (squares >= 100) {
    alert("less than 100 squares needed");
  } else {
    container.innerHTML = "";
    loadGrid(squares);
  }
}
