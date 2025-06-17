displayTime = document.getElementById("displayTime");
startBtn = document.getElementById("startBtn");
stopBtn = document.getElementById("stopBtn");
resetBtn = document.getElementById("resetBtn");
let startTime;

let interval = null;
isRunning = false;

const start = () => {
    if (!isRunning) {
        startTime = Date.now();
        interval = setInterval(update, 10);
        isRunning = true;
    }
};

const stop = () => {
    isRunning = false;
    clearInterval(interval);
};

const reset = () => {
    stop();
    clearInterval(interval);
    elaspedTime = 0;
    displayTime.textContent = `00:00:00:00`;
};

const update = () => {
    let currentTime = Date.now();
    let elaspedTime = currentTime - startTime;

    let hours = Math.floor((elaspedTime / (60 * 60 * 100)) % 60);
    let minutes = Math.floor((elaspedTime / (60 * 1000)) % 60);
    let seconds = Math.floor((elaspedTime / 1000) % 60);
    let milliSeconds = Math.floor((elaspedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");
    displayTime.textContent = `00:${minutes}:${seconds}:${milliSeconds}`;
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
