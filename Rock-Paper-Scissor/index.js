// Get button elements and result display area
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const score = document.getElementById("score");
var cscore = document.getElementById("Cscore");
var player = document.getElementById("Mscore");


var Cscore = 0;
var Mscore = 0;
// Function to generate the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
    return "It's a tie!";
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
){
    Mscore++;
    return "You win!";
} else {
    Cscore++;
    return "Computer wins!";
}
}

// Function to play a new game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDisplay.textContent = `You choose ${userChoice}. Computer choose ${computerChoice}. ${result}`;
    cscore.innerText = Cscore;
    player.innerText = Mscore;

    if(Mscore == 3){
    const playAgain = confirm("Player Won the Match Do you want to play again?");
    if (playAgain) {
        resultDisplay.textContent = "";
        cscore.innerText = 0;
        player.innerText = 0;
        Cscore=0;
        Mscore=0;
    
    }
    }
    if(Cscore == 3){
    const playAgain1 = confirm("Computer Won the Match Do you want to play again?");
    if (playAgain1) {
        resultDisplay.textContent = "";
        cscore.innerText = 0;
        player.innerText = 0;
        Cscore=0;
        Mscore=0;
    
    } 
    }
}
function playagain(){

}


// Add click event listeners to the buttons
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
