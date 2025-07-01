const displayNum = document.getElementById("displayNum");
const btn = document.querySelectorAll("button");

btn.forEach((element) => {
    console.log(element.textContent);
});

btn.addEventListener((ele) => {
    console.log(ele);
});
