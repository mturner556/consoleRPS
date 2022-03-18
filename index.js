// computer gets random choice when called
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

// this function plays a single round of the game
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + playerSelection + " loses to " + computerSelection;
    }
}


// const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
// const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
// This function will play five rounds and declare a winner of the match
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        
        if (playRound === "It's a tie.") {
            console.log(playerScore + " : " + computerScore);
        } else if ( playRound === "You win! " + playerSelection + " beats " + computerSelection) {
            playerScore++;
            console.log(playerScore + " : " + computerScore);
        } else if ("You lose! " + playerSelection + " loses to " + computerSelection) {
            computerScore++;
            console.log(playerScore + " : " + computerScore);
        }
    }

    if (playerScore === computerScore) {
        alert("The match is a tie!")
    } else if (playerScore > computerScore) {
        alert("You won the match.") 
    } else {
        alert("You lose the match.")
    }
}

game();