let numRows = 16;
let color = "#000000";
const canvas = document.querySelector(".canvas");
const size_output = document.querySelector("#canvas-size");
const size_input = document.querySelector(".slider");

function loadCanvas(numRows) {
    canvas.style.setProperty("--grid-rows", numRows);
    canvas.style.setProperty("--grid-cols", numRows);
    for(let i = 0; i < (numRows ** 2); i++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        cell.id = i + 1;
        canvas.appendChild(cell);
    }
};

function clearCanvas() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
};

loadCanvas(numRows);

size_input.addEventListener("input", () => {
    numRows = size_input.valueAsNumber;
    size_output.textContent = "Size of canvas: " + numRows + "x" + numRows;
    clearCanvas();
    loadCanvas(numRows);
});

const pixels = document.querySelectorAll(".grid-item");
pixels.forEach(pixel => pixel.addEventListener("hover", (e) => {
    console.log(e);
}));