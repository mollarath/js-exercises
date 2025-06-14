const randomBtn = document.getElementById("randomBtn");
const numDice = document.getElementById("numDice");
const diceImgList = document.getElementById("diceImgList");
const message = document.getElementById("message");

let randomDice = () => {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    return diceNum;
};

randomBtn.addEventListener("click", () => {
    while (diceImgList.firstChild) {
        diceImgList.removeChild(diceImgList.firstChild);
    }

    let totalNum = 0;
    let num = Number(numDice.value);
    for (let i = 1; i < num + 1; i++) {
        let diceNum = randomDice();
        let diceImg = document.createElement("img");
        diceImg.src = `./dice_images/dice-six-faces-${diceNum}.png`;
        diceImgList.appendChild(diceImg);
        totalNum += diceNum;
    }
    message.textContent = `The total score is ${totalNum}`;
    numDice.value = "";
});
