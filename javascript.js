//We declare the players score variables
let humanScore = 0
let computerScore = 0
let round = 0

//The Loop for 5 rounds 
while (round < 5) {

// Computer chooses randomly Rock, paper or scissors
let randomNumber = Math.floor(Math.random() * 100);
function getComputerChoice (randomNumber) {
if (randomNumber < 33 ) {
    return "Rock"
} 
else if ( randomNumber < 66) {
    return "Paper"
}
else return "Scissors"
}
let computerChoice = getComputerChoice (randomNumber);

// Human inputs his choice 
let input = prompt("Rock, paper,or Scissors", "Scissors");
let normalize = input.toLowerCase () ;

function getHumanChoice (normalize) {
    if (normalize == "rock"){
        return "Rock"
    }
    else if (normalize === "paper") {
        return "Paper"
    }
    else return "Scissors"
}
let humanChoice = getHumanChoice (normalize)

//Round and game rules
function playRound (humanChoice , computerChoice) {
if (humanChoice === computerChoice) {
    return "Draw"
}
else if (humanChoice == "Rock" && computerChoice == "Paper"){
    return "Computer wins" ;
}
else if (humanChoice == "Paper" && computerChoice == "Scissors"){
    return "Computer wins " 
}
else if (humanChoice == "Scissors" && computerChoice == "Rock"){
    return "Computer wins";
}
else if (computerChoice == "Rock" && humanChoice == "Paper"){
    return "Human wins ";
}
else if (computerChoice == "Paper" && humanChoice == "Scissors"){
    return "Human wins";
}
else if (computerChoice == "Scissors" && humanChoice == "Rock"){
    return "Human wins";
}
}

//Show result
let result = playRound (humanChoice,computerChoice)
function message(result)  {
if (result == "Computer wins") {
    return `You lose , ${computerChoice} beats ${humanChoice} ! `
}
else if ( result == "Human wins"){
    return `You win , ${humanChoice} beats  ${computerChoice} !`
}
else  return `Draw`
}

// Update the score 
function score (result) {
    if (result == "Computer wins") {
        return ++computerScore ;
    }
        else if (result == "Human wins") {
        return ++humanScore;
    }
}
score(result);
console.log (message(result));
console.log (`Your score is ${humanScore} and Computer's score is ${computerScore}`);

//Define the Round
round++;
}