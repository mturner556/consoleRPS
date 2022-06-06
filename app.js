// selecting the buttons
let buttons = document.querySelectorAll(".button").length;

// getting div element
let div = document.querySelector("div");

// getting results div element
let results = document.getElementById("results");

// score keeping variables
let playerScore = 0;
let computerScore = 0;

// computer gets random choice when called
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

// looping through buttons that the user cllicked
for (let i = 0; i < buttons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", () => {

        // selecting the inner text of the button the user pressed
        let playerChoice = document.querySelectorAll(".button")[i].textContent.toLowerCase();
        let computerChoice = computerPlay();

        // passing the inner text of the button and the copmuterChoice onto playRound when the user clicks one of the selection buttons.
        playerChoice.onClick = playRound(playerChoice, computerChoice);

        // comparing the results of playRound and updating the score
        if (playRound(playerChoice, computerChoice) === "tie") {
            div.textContent = "Tie. Player: " + playerScore + ". Computer: " + computerScore;
        } else if (playRound(playerChoice, computerChoice) === "win") {
            playerScore++;
            div.textContent = "Win. Player: " + playerScore + ". Computer: " + computerScore;
        } else {
            computerScore++;
            div.textContent = "Lose. Player: " + playerScore + ". Computer: " + computerScore;        
        }

        // updating the results div with the match winner and displaying the reset button.
        if (computerScore === 5 && playerScore < 5) {
            results.textContent = "You Lose the match.";
        } else if (computerScore < 5 && playerScore === 5) {
            results.textContent = "Your Win the match.";
        }
    });
}

// this function plays a single round of the game
function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    } else  if (playerSelection === "paper" && computerSelection === "scissors"){
        return "lose";
    } else  if (playerSelection === "scissors" && computerSelection === "rock"){
        return "lose";
    } else  if (playerSelection === "rock" && computerSelection === "paper"){
        return "lose";
    } else {
        return "ERROR";
    }
}

