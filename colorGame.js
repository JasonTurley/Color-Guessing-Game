var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var goalColor = selectColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var countDisplay = document.querySelector("#tryCount");
var tryCount = 0;

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // `backgroundColor` is compatable with more browsers than just `background`
   
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor; 
        ++tryCount;
        if (clickedColor === goalColor) {
            changeColor(clickedColor);
            h1.style.backgroundColor = goalColor;
            message.textContent = "Correct!";
            (tryCount === 1) ? countDisplay.textContent = "Took " + tryCount + " try"
                             : countDisplay.textContent = "Took " + tryCount + " tries";
            resetButton.textContent = "Play Again?";
        }
        else {
            // fade color into background
            message.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

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

// Resets the game
function reset() {
    // generate new randomly colored squares
    colors = generateRandomColors(colors.length);
    goalColor = selectColor();
    // update heading display color
    colorDisplay.textContent = goalColor;
    // change square colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // reset heading, button and span
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    tryCount = 0;
    countDisplay.textContent = "";
}

resetButton.addEventListener("click", reset);