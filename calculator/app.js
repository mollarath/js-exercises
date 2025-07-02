const displayUpper = document.getElementById("displayUpper");
const displayLower = document.getElementById("displayLower");
const btn = document.querySelectorAll("button");

let eqStack = [];
let result = 0;
const operator = ["+", "-", "×", "÷"];

btn.forEach((ele) => {
    ele.addEventListener("click", () => {
        insTo(ele.textContent);
    });
});

const insTo = (char) => {
    switch (char) {
        case "AC":
            displayUpper.innerHTML = "&nbsp;";
            displayLower.textContent = 0;
            eqStack = [];
            break;
        case "+/-":
            break;
        case "%":
            break;
        case "=":
            // let i = 0;
            // while (eqStack.length != 0) {
            //     if (operator.includes(eqStack[i])) {
            //     }
            //     i++;
            // }
            break;
        default:
            // if first element in stack is operator, then insert 0 first
            if (operator.includes(char) && eqStack.length === 0) {
                eqStack.push("0");
                eqStack.push(char);
                // if the last element in stack is already a operator pop that out
            } else if (
                operator.includes(eqStack[eqStack.length - 1]) &&
                operator.includes(char)
            ) {
                // if last two elements are ['×' or '÷'] and '-', and input is '-', then do nothing
                if (
                    ["×", "÷"].includes(eqStack[eqStack.length - 2]) &&
                    eqStack[eqStack.length - 1] === "-" &&
                    char === "-"
                ) {
                    break;
                    // if there is two operator next to each other, then pop() 2 times and push input to stack
                } else if (operator.includes(eqStack[eqStack.length - 2])) {
                    eqStack.pop();
                    eqStack.pop();
                    eqStack.push(char);
                } else if (
                    ["×", "÷"].includes(eqStack[eqStack.length - 1]) &&
                    char === "-"
                ) {
                    eqStack.push(char);
                } else {
                    eqStack.pop();
                    eqStack.push(char);
                }
            } else {
                eqStack.push(char);
            }
            displayLower.textContent = `${eqStack.join("")}`;
    }
};

// +
// -
// + -> -
// - -> +
// ×
// ÷
// ×-
// ÷-
