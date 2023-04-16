const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const conputerHand = document.querySelector(".computer-hand");

    //Computer's options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //Here is where we compare hands
      });
    });
  };
  //Compare hands
  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector(".winner");
    //Check for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }
    //Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        return;
      } else {
        winner.textContent = "Computer wins!";
        return;
      }
    }
    //Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins!";
        return;
      } else {
        winner.textContent = "Computer wins!";
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins!";
        return;
      } else {
        winner.textContent = "Computer wins!";
        return;
      }
    }
  };

  //call all inner functions
  startGame();
  playMatch();
};

//start game function
game();
