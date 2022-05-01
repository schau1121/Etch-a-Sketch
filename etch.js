let numRows = 16;
let color = "#000000";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const canvas = document.querySelector(".canvas");
const size_output = document.querySelector("#canvas-size");
const size_input = document.querySelector(".slider");

size_input.addEventListener("input", setCanvasSize);

function loadCanvas(numRows) {
    canvas.style.setProperty("--grid-rows", numRows);
    canvas.style.setProperty("--grid-cols", numRows);
    for(let i = 0; i < (numRows ** 2); i++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        cell.id = i + 1;
        cell.addEventListener("mouseover", changePixelColor);
        cell.addEventListener("mousedown", changePixelColor);
        canvas.appendChild(cell);
    }
};

function clearCanvas() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
};

function setCanvasSize() {
    numRows = size_input.valueAsNumber;
    size_output.textContent = "Size of canvas: " + numRows + "x" + numRows;
    clearCanvas();
    loadCanvas(numRows);
}

function changePixelColor(e) {
    if(e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = color;
}

loadCanvas(numRows);