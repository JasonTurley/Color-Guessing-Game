var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var goalColor = selectColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // `backgroundColor` is compatable with more browsers than just `background`
   
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor; 
        if (clickedColor === goalColor) {
            message.textContent = "Correct!";
            changeColor(clickedColor);
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

// Returns number between 0 and 255
function randomColor() {
    return (Math.floor(Math.random() * 256));
}

function generateRandomColors(num) {
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        arr[i] = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() +")";
    }
    return arr;
}