const displayTime = document.getElementById("displayTime");

function getTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');

    displayTime.textContent = `${hours}:${minutes}:${seconds}`;
    // console.log(hours, minutes, seconds);
}

setInterval(getTime, 1000);
