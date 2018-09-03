var colors = generateRandomColors(6);

var BACKGROUNGCOLOR = "#232323";
var H1COLOR = "#4B8AE5";

var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("newColor");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener('click', function() {
    messageDisplay.textContent = "";
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = H1COLOR;
})

hardBtn.addEventListener('click', function() {
    messageDisplay.textContent = "";
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = H1COLOR;
})

resetBtn.addEventListener('click', function() {
    // reset the message that already shown
    messageDisplay.textContent = "";
    // reset background color of h1
    h1.style.backgroundColor = H1COLOR;
    this.textContent = "New Colors";
    // generate random colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colors of squares
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // change displayed color text
    colorDisplay.textContent = pickedColor;

})

colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
    // initiate colors
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeAllColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

            // change new color button to play again
            resetBtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = BACKGROUNGCOLOR;
            messageDisplay.textContent = "Try Again!";
        }
    });
}


function changeAllColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    // change each color to match given color
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return the array
    return arr;
} 

function randomColor() {
    // pick a red
    var randRed = Math.floor(Math.random() * 256);
    // pick a green
    var randGreen = Math.floor(Math.random() * 256);
    // pick a blue
    var randBlue = Math.floor(Math.random() * 256);

    return "rgb(" + randRed + ", " + randGreen + ", " + randBlue + ")";
}