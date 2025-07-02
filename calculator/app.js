const displayUpper = document.getElementById("displayUpper");
const displayLower = document.getElementById("displayLower");
const btn = document.querySelectorAll("button");

// equation that used to calculate
let eqStack = [];

let result = 0;
const operator = ["+", "-", "×", "÷"];
let numStr = "";

btn.forEach((ele) => {
    ele.addEventListener("click", () => {
        insTo(ele.textContent);
    });
});

const calEq = (stack) => {
    if (stack.length !== 0) {
        console.log(stack);
    }
};

const reset = () => {
    displayUpper.innerHTML = "&nbsp;";
    displayLower.textContent = 0;
    eqStack = [];
};

const insTo = (char) => {
    switch (char) {
        case "AC":
            reset();
            break;
        case "+/-":
            break;
        case "%":
            break;
        case "=":
            calEq(eqStack);
            break;
        case ".":
            break;
        default:
            break;
    }
};
