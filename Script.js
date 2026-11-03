let count = 0;

const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const resetButton = document.getElementById("reset");


function updateDisplay() {

    countDisplay.textContent = count;

}


increaseButton.addEventListener("click", function() {

    count++;

    updateDisplay();

});


decreaseButton.addEventListener("click", function() {

    count--;

    updateDisplay();

});


resetButton.addEventListener("click", function() {

    count = 0;

    updateDisplay();

});
