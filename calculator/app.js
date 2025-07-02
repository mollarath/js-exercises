const displayUpper = document.getElementById("displayUpper");
const displayLower = document.getElementById("displayLower");
const btn = document.querySelectorAll("button");

// equation that used to calculate (limit to 3 length)
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
    result = Number(stack[0]);
    let tmp = Number(stack[2]);
    switch (stack[1]) {
        case "+":
            result += tmp;
            break;
        case "-":
            result -= tmp;
            break;
        case "×":
            result *= tmp;
            break;
        case "÷":
            result /= tmp;
            break;
    }
};

const reset = () => {
    displayUpper.innerHTML = "&nbsp;";
    displayLower.textContent = 0;
    eqStack = [];
    numStr = "";
};

const insTo = (input) => {
    switch (input) {
        case "AC":
            reset();
            break;
        case "+/-":
            break;
        case "%":
            break;
        case "=":
            eqStack.push(numStr);
            calEq(eqStack);
            displayUpper.textContent = `${eqStack.join("")} =`;
            displayLower.textContent = `${result}`;
            break;
        case ".":
            break;
        default:
            if (!operator.includes(input)) {
                numStr += input;
                displayLower.textContent = `${numStr}`;
            } else {
                eqStack.push(numStr);
                eqStack.push(input);
                displayUpper.textContent = `${eqStack.join("")}`;
                numStr = "";
            }
            break;
    }
};
