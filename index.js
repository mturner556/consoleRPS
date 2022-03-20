// computer gets random choice when called
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

// this function plays a single round of the game
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "TIE";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "WIN";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "WIN";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "WIN";
    } else  if (playerSelection === "paper" && computerSelection === "scissors"){
        return "LOSE";
    } else  if (playerSelection === "scissors" && computerSelection === "rock"){
        return "LOSE";
    } else  if (playerSelection === "rock" && computerSelection === "paper"){
        return "LOSE";
    } else {
        return "ERROR";
    }
}


// const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerSelection);
// console.log(computerSelection);
// This function will play five rounds and declare a winner of the match
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);

        // console.log(roundResult);
        // console.log(playerSelection + " " + computerSelection);

        if (roundResult === "TIE") {
            console.log("It's a tie. You chose " + playerSelection + " and the computer chose " + computerSelection);
            console.log(playerScore + " : " + computerScore);
        } else if ( roundResult === "WIN") {
            playerScore++;
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            console.log(playerScore + " : " + computerScore);
        } else if (roundResult === "LOSE") {
            computerScore++;
            console.log("You lose! " + playerSelection + " loses to " + computerSelection);
            console.log(playerScore + " : " + computerScore);
        } else {
            console.log(playerSelection + " is not a valid choice.");
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