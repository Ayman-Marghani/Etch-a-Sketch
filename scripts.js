const GRID_SIZE = 600;
const BORDER_STYLE = "2px solid black";
const container = document.querySelector(".container");
const squaresNumBtn = document.querySelector(".squares-num-btn");

function getSquaresNum() {
  squaresNum = Number(prompt("Enter the number of squares per row (max: 100): "));
  while (squaresNum > 100 || squaresNum < 1 || Number.isNaN(squaresNum)) {
    squaresNum = Number(prompt("Enter the number of squares per row (max: 100): "));
  }
  squaresNum = Math.floor(squaresNum);
  return squaresNum;
}

function removeGrid() {
  let rowElem = container.lastElementChild;
  while (rowElem) {
    container.removeChild(rowElem);
    rowElem = container.lastElementChild;
  }
}

function createGrid(squaresNum) {
  for (let i = 0; i < squaresNum; i++) {
    const rowElem = document.createElement("div");
    rowElem.classList.add("row");
    container.appendChild(rowElem);
    for (let j = 0; j < squaresNum; j++) {
      const squareElem = document.createElement("div");
      squareElem.classList.add("square");
      const squareSize = GRID_SIZE / squaresNum;
      squareElem.style.minHeight = `${squareSize}px`;
      squareElem.style.minWidth = `${squareSize}px`;
      if (i === 0) {
        squareElem.style.borderTop = BORDER_STYLE;
      }
      if (i === squaresNum - 1) {
        squareElem.style.borderBottom = BORDER_STYLE;
      }
      rowElem.appendChild(squareElem);
    }
    rowElem.firstElementChild.style.borderLeft = BORDER_STYLE;
    rowElem.lastElementChild.style.borderRight = BORDER_STYLE;
  }
}

// Grid resize event
squaresNumBtn.addEventListener("click", () => {
  squaresNum = getSquaresNum();
  removeGrid();
  createGrid(squaresNum);
});

// hover event
container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "#adb5bd";
});


// Init the grid with default number of squares (16x16)
createGrid(16);



