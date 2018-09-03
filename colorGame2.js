var colors = [];
var numSquares = 6;
var pickedColor;

var BACKGROUNGCOLOR = "#232323";
var H1COLOR = "#4B8AE5";


var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("newColor");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares()
    resetBtn.addEventListener('click', function() {
        reset();
    })
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function() {
            // clear the style of all buttons
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            // add style to selected one
            this.classList.add("selected");

            // figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
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
}



function reset() {
    // set the message shown to be ""
    messageDisplay.textContent = "";
    // reset background color of h1
    h1.style.backgroundColor = H1COLOR;
    resetBtn.textContent = "New Colors";

    // generate random colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    // change displayed color text
    colorDisplay.textContent = pickedColor;
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