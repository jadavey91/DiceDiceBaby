const playAgainButton = document.querySelector("#playagain");
const head = document.querySelector("#heading");
const yourScore = document.querySelector("#score");
const blankStart = document.querySelector("#blank");
const diceScore = document.querySelector("#dice");
const rollButton = document.querySelector("#submit");

let totScore = 0;

// if (randomNumber == 1){
//     head.textContent= "You Lost"
//     totScore = 0;
//     playAgainButton.textContent = "Play Again";
// }


rollButton.addEventListener("click", () => {
    let randomNumber = Math.ceil(Math.random()* 6 );
    totScore += randomNumber;
    yourScore.innerHTML = totScore;
    console.log(randomNumber);
    console.log(totScore);
    diceScore.src = `img/dice${randomNumber}.png`;
    // if (randomNumber == 1){
    //             diceScore.src="img/dice1.png";
    //         }
    //         else if (randomNumber == 2){
    //             diceScore.src="img/dice2.png"
    //         }
    //         else if (randomNumber == 3){
    //             diceScore.src="img/dice3.png"
    //         }
    //         else if (randomNumber == 4){
    //             diceScore.src="img/dice4.png"
    //         }
    //         else if (randomNumber == 5){
    //             diceScore.src="img/dice5.png"
    //         }
    //         else if (randomNumber == 6){
    //             diceScore.src="img/dice6.png"
    //         }
    //         else {
    //             diceScore.src="img/dice1.png";
    //         }
})

// if (yourScore > 20) {
//     head.textContent = "You won";
//     playAgainButton.textContent = "Play Again";
// } 

// playAgainButton.addEventListener("click", () => {
//     if (yourScore > 20)
//     playAgainButton.innerHTML = Play Again;
// })


// rollImage = () => {
//     if (randomNumber == 1){
//         diceScore.src="img/dice1.png";
//     }
//     else if (randomNumber == 2){
//         diceScore.image.src="img/dice2.png"
//     }
//     else if (randomNumber == 3){
//         diceScore.image.scr="img/dice3.png"
//     }
//     else if (randomNumber == 4){
//         diceScore.image.src="img/dice4.png"
//     }
//     else if (randomNumber == 5){
//         diceScore.image.src="img/dice5.png"
//     }
//     else if (randomNumber == 6){
//         diceScore.image.src="img/dice6.png"
//     }
// }


