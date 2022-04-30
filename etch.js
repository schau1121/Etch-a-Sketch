const canvas = document.querySelector(".canvas");
console.log(canvas);

function loadCanvas(numRows) {
    let numSquares = numRows ** 2;
    for(let i = 0; i < numSquares; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = i + 1;
        canvas.appendChild(pixel);
    }
}