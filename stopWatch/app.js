displayTime = document.getElementById("displayTime");
startBtn = document.getElementById("startBtn");
stopBtn = document.getElementById("stopBtn");
resetBtn = document.getElementById("resetBtn");
lapBtn = document.getElementById("lapBtn");
lapList = document.getElementById("lapList");

let startTime;
let elaspedTime = 0;
let interval;
let hours;
let minutes;
let seconds;
let milliSeconds;
isRunning = false;

const make2Digit = (num) => {
    return String(num).padStart(2, "0");
};

const start = () => {
    if (!isRunning) {
        startBtn.style.display = "none";
        stopBtn.style.display = "inline";
        startTime = Date.now() - elaspedTime;
        isRunning = true;
        interval = setInterval(update, 10);
    }

    stopBtn.style.display = "inline";
    resetBtn.style.display = "inline";
    lapBtn.style.display = "inline";
};

const stop = () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        stopBtn.style.display = "none";
        startBtn.textContent = "Continue";
        startBtn.style.display = "inline";
    }
};

const reset = () => {
    stop();
    clearInterval(interval);
    elaspedTime = 0;
    displayTime.textContent = `00:00:00:00`;
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
    lapBtn.style.display = "none";
    while (lapList.firstChild) {
        console.log(lapList.firstChild);
        lapList.removeChild(lapList.firstChild);
    }
    startBtn.textContent = "Start";
    startBtn.style.display = "inline";
};

const update = () => {
    let currentTime = Date.now();
    elaspedTime = currentTime - startTime;

    hours = Math.floor((elaspedTime / (60 * 60 * 100)) % 60);
    minutes = Math.floor((elaspedTime / (60 * 1000)) % 60);
    seconds = Math.floor((elaspedTime / 1000) % 60);
    milliSeconds = Math.floor((elaspedTime % 1000) / 10);

    hours = make2Digit(hours);
    minutes = make2Digit(minutes);
    seconds = make2Digit(seconds);
    milliSeconds = make2Digit(milliSeconds);
    displayTime.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
};

const addLap = () => {
    let li = document.createElement("li");
    li.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    lapList.append(li);
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", addLap);
