const displayTime = document.getElementById("displayTime");

function getTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    displayTime.textContent = `${hours}:${minutes}:${seconds}`;
    // console.log(hours, minutes, seconds);
}

setInterval(getTime, 1000);
