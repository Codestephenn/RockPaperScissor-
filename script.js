let messageEl = document.getElementById("message-el");
let scoresEl = document.getElementById("scores-el");
const buttons = document.querySelectorAll("button");
const cancelBtn = document.getElementById("cancel-btn");
const restartBtn = document.getElementById("restart-btn");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to generate computer's choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
//function to start the game
function playGame(){
  playRound();
}
// Function to determine the winner of a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    messageEl.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    messageEl.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++; // Increment player score
  } else {
    messageEl.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++; // Increment computer score
  }
  roundsPlayed++; // Increment rounds played
  updateScores();
}

// Function to update scores display
function updateScores() {
  scoresEl.textContent = `Current Scores - Player: ${playerScore} Computer: ${computerScore}`;
  if (roundsPlayed === 10) {
    endGame();
  }
}

// Function to end the game
function endGame() {
  if (playerScore > computerScore) {
    messageEl.textContent = "You win the game!";
  } else if (playerScore < computerScore) {
    messageEl.textContent = "You lose the game!";
  } else {
    messageEl.textContent = "It's a tie!";
  }
  disableButtons();
  
}

// Function to disable buttons and cancel button functionality
function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true; // Disable game buttons
  });
  cancelBtn.disabled = true; // Disable cancel button
  restartBtn.disabled = false;
}

// Event listeners for game buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed < 10) {
      let playerSelection = button.id;
      let computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
     // playGame();
    }
  });
});

// Event listener for cancel button
cancelBtn.addEventListener("click", () => {
  endGame(); // End the game
});

// Function to restart the game
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  messageEl.textContent = "";
  scoresEl.textContent = "";
  
}

// Event listener for restart button
restartBtn.addEventListener("click", () => {
  restartGame(); // Restart the game
  buttons.forEach((button) => {
    button.disabled = false; // Enable game buttons
  });
  cancelBtn.disabled = false; // Enable cancel button
});