const GRID_SIZE = 16;
const container = document.querySelector(".container");

for (let i = 0; i < GRID_SIZE; i++) {
  const rowElem = document.createElement("div");
  rowElem.classList.add("row");
  container.appendChild(rowElem);
  for (let j = 0; j < GRID_SIZE; j++) {
    const squareElem = document.createElement("div");
    squareElem.classList.add("square");
    rowElem.appendChild(squareElem);
  }
}