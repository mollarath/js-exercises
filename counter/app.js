let displayCounter = document.getElementById("displayCounter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

counter = 0

increaseBtn.onclick = function(){
    counter += 1;
    displayCounter.textContent = counter;
};

decreaseBtn.onclick = function(){
    counter -= 1;
    displayCounter.textContent = counter;
};

resetBtn.onclick = function(){
    counter = 0
    displayCounter.textContent = counter;
}