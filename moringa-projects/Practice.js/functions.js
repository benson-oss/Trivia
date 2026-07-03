// Step 1: Define choices
const choices = ["rock", "paper", "scissors"];

// Step 2: Function to get computer's random choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 3: Function to decide winner
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Step 4: Play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  console.log("You chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log(playRound(playerChoice, computerChoice));
}

// Example run:
playGame("paper");
