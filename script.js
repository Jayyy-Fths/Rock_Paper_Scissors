// Function to get the computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (userChoice === "rock") {
    return computerChoice === "paper" ? "Computer won!" : "User  won!";
  } else if (userChoice === "paper") {
    return computerChoice === "scissors" ? "Computer won!" : "User  won!";
  } else if (userChoice === "scissors") {
    return computerChoice === "rock" ? "Computer won!" : "User  won!";
  }
};

// Function to play the game
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const resultMessage = document.getElementById("resultMessage");

  // If the user chooses 'bomb', they automatically win
  if (userChoice === "bomb") {
    resultMessage.textContent = "User  won! (Cheat code activated)";
  } else {
    resultMessage.textContent = `User  choice: ${userChoice}, Computer choice: ${computerChoice}. ${determineWinner(
      userChoice,
      computerChoice
    )}`;
  }
};

// Event listeners for buttons
document
  .getElementById("rock")
  .addEventListener("click", () => playGame("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("scissors"));
document
  .getElementById("bomb")
  .addEventListener("click", () => playGame("bomb"));
