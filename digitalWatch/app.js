const displayTime = document.getElementById("displayTime");
const displayDate = document.getElementById("displayDate");
const timeFormat = document.getElementById("timeFormat");

function getTime() {
    const weekName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date();

    let weekDayNum = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    timeFormat.textContent = hours >= 12 ? `PM` : `AM`;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    displayDate.textContent = `${weekName[weekDayNum]} ${day}/${month}/${year}`;
    displayTime.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);
