var numSquares = 6;
var colors = [];
var goalColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = goalColor;   // RGB color to guess

init();

function init() {
    // mode button event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
    
    for (var i = 0; i < squares.length; i++) {   
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor; 
            if (clickedColor === goalColor) {
                changeColor(clickedColor);
                h1.style.backgroundColor = goalColor;
                message.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
            } else {
                // fade color into background
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }

    reset();
}
// Resets the game
function reset() {
    // generate new randomly colored squares
    colors = generateRandomColors(numSquares);
    goalColor = selectColor();
    // update heading display color
    colorDisplay.textContent = goalColor;
    // change square colors
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else { 
            squares[i].style.display = "none";
        }
    }
    // reset heading, button and span
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
}

resetButton.addEventListener("click", reset);


// Changes color of all squares to the goal color when the correct square is clicked
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        // change square color to goal color
        squares[i].style.backgroundColor = color;
    }
}

// Selects random index from colors array
function selectColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Helper function: returns number between 0 and 255
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}

// Returns an array of random rgb colors
function generateRandomColors(num) {
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
        // arr[i] = randomColor();
    }
    return arr;
}

