var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

// iterate across squares and assign each a color
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