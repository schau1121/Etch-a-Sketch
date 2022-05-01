let numRows = 16;
let color = "#000000";
let rainbow_mode = false;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const canvas = document.querySelector(".canvas");
const size_output = document.querySelector("#canvas-size");
const size_input = document.querySelector(".slider");
const color_input = document.querySelector("#color-input");
const color_btn = document.querySelector("#color");
const rainbow_btn = document.querySelector("#rainbow");
const clear_btn = document.querySelector("#clear-canvas");

size_input.addEventListener("input", setCanvasSize);
color_input.addEventListener("input", setColor);
color_btn.addEventListener("click", setMode);
rainbow_btn.addEventListener("click", setMode);
clear_btn.addEventListener("click", () => {
    loadCanvas(numRows)
});

function loadCanvas(numRows) {
    clearCanvas();

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
    loadCanvas(numRows);
}

function changePixelColor(e) {
    if(e.type === "mouseover" && !mouseDown) return;
    if(rainbow_mode) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let rainbow_color = `rgb(${r}, ${g}, ${b})`;
        e.target.style.backgroundColor = rainbow_color;
    } else {
        e.target.style.backgroundColor = color;
    }
}

function setColor() {
    color = color_input.value;
}

function setMode(e) {
    rainbow_mode = e.target.id === "rainbow" ? true : false;
    if(rainbow_mode) {
        rainbow_btn.classList.add("active");
        color_btn.classList.remove("active");
    } else {
        rainbow_btn.classList.remove("active");
        color_btn.classList.add("active");
    }
}

loadCanvas(numRows);