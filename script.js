// Function to generate computer's choice
function getComputerChoice() {
  // Generate a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);
  // Map the random number to a choice: 0 => "rock", 1 => "paper", 2 => "scissors"
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to determine the winner of a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Function to play the game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection;
    let validInput = false;


    // Keep prompting the user until they enter a valid input
    while (!validInput) {
      playerSelection = prompt("Enter a choice: rock, paper, or scissors?").toLowerCase();

      // Validate the user input
      if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        validInput = true;
      } else {
        console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
      }
    }

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}: ${result}`);

    if (result.startsWith("You win!")) {
      playerScore++;
    } else if (result.startsWith("You lose!")) {
      computerScore++;
    }

  //provide feedback on current scores
  console.log(`Current Scores- 
  Player: ${playerScore} Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie");
  }
  
}

playGame();