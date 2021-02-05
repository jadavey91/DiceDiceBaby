const playAgainButton = document.querySelector("#playagain");
const h1 = document.querySelector("#heading");
const yourScore = document.querySelector("#score");
const blankStart = document.querySelector("#blank");
const diceScore = document.querySelector("#dice");
const rollButton = document.querySelector("#submit");


let randomNumber = Math.floor(Math.random()*(7-1)+1);
let totScore = 0;




rollButton.addEventListener("click", () => {
    console.log(randomNumber);
    totScore = totScore + randomNumber;
})

rollImage = () => {
    if (randomNumber == 1){
        diceScore.src="img/dice1.png";
    }
    else if (randomNumber == 2){
        diceScore.image.src="img/dice2.png"
    }
    else if (randomNumber == 3){
        diceScore.image.scr="img/dice2.png"
    }
    else if (randomNumber == 4){
        diceScore.image.src="img/dice2.png"
    }
    else if (randomNumber == 5){
        diceScore.image.src="img/dice2.png"
    }
    else if (randomNumber == 6){
        diceScore.image.src="img/dice2.png"
    }
}


