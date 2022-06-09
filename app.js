// selecting the buttons
let buttons = document.querySelectorAll(".button").length;

// getting div element
let div = document.querySelector("div");

let hiddenDiv = document.getElementById("hiddenDiv");
hiddenDiv.classList.add("hidden");

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
    document.querySelectorAll(".button")[i].addEventListener("click", (e) => {
        console.log(e);
        // selecting the inner text of the button the user pressed
        let playerChoice = document.querySelectorAll(".button")[i].textContent.toLowerCase();
        let computerChoice = computerPlay();

        // passing the inner text of the button and the copmuterChoice onto playRound when the user clicks one of the selection buttons.
        playerChoice.onClick = playRound(playerChoice, computerChoice);

        // updating the results div with the match winner and displaying the reset button, and comparing results of playRound.
        if ((playerScore < 5 && computerScore < 5) && (playRound(playerChoice, computerChoice) === "tie")) {
            div.textContent = "It's a Tie. Player: " + playerScore + ". Computer: " + computerScore;
        } else if ((playerScore < 5 && computerScore < 5) && (playRound(playerChoice, computerChoice) === "win")) {
            playerScore++;
            div.textContent = "You Win. Player: " + playerScore + ". Computer: " + computerScore;
        } else if ((playerScore < 5 && computerScore < 5) && (playRound(playerChoice, computerChoice) === "lose")){
            computerScore++;
            div.textContent = "You Lose! Player: " + playerScore + ". Computer: " + computerScore;        
        }

        if (computerScore === 5 && playerScore < 5) {
            playerChoice.onClick = "";
            results.textContent = "You Lose the match.";
            hiddenDiv.classList.remove("hidden");
        } else if (computerScore < 5 && playerScore === 5) {
            playerChoice.onClick = "";
            results.textContent = "You Win the match.";
            hiddenDiv.classList.remove("hidden");
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