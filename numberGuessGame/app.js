let userInput = document.getElementById("userInput");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let guessedList = document.getElementById("guessedList");
let showGuessed = document.getElementById("showGuessed");
let maxNum = 100;
let minNum = 1;
let guessNum;
let attempt = 1;
let randomNum = Math.floor(Math.random() * maxNum) + minNum;

let reset = () => {
    attempts = 0;
    message.textContent = "";
    randomNum = Math.floor(Math.random() * maxNum) + minNum;
    submitBtn.style.display = "inline";
    userInput.value = "";

    showGuessed.style.display = "none";
    // if
    guessedList.innerHTML = "";
};

let checkNum = () => {
    if (isNaN(userInput.value) || userInput.value === "") {
        message.textContent = "please enter a number";
        message.style.color = "red";
    } else {
        message.textContent = "";
        guessNum = parseInt(userInput.value, 10);
        if (guessNum > maxNum) {
            message.textContent = `enter number that is lower than ${maxNum}`;
            message.style.color = "red";
        } else if (guessNum < minNum) {
            message.textContent = `enter number that is higher than ${minNum}`;
            message.style.color = "red";
        } else if (guessNum === randomNum) {
            message.textContent = `you are correct! ${attempt} attempt(s) to play again please press reset`;
            message.style.color = "green";
            submitBtn.style.display = "none";
        } else if (guessNum > randomNum) {
            message.textContent = "try again with lower number!";
            message.style.color = "red";
            attempt++;
            showGuessed.style.display = "block";
            const newGuessLi = document.createElement("li");
            newGuessLi.textContent = guessNum;
            guessedList.appendChild(newGuessLi);
        } else if (guessNum < randomNum) {
            message.textContent = "try again with higher number!";
            message.style.color = "red";
            attempt++;
            const newGuessLi = document.createElement("li");
            newGuessLi.textContent = guessNum;
            guessedList.appendChild(newGuessLi);
        }
        userInput.value = "";
    }
};

submitBtn.addEventListener("click", checkNum);
resetBtn.addEventListener("click", reset);
