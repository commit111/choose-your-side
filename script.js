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
    const computerHand = document.querySelector(".computer-hand");

    //Computer's options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
        //Here is where we compare hands
        compareHands();

        //Update images
        if (this === "rock") {
          playerHand.src =
            "https://cdn.glitch.global/361f528c-ba2e-4ccd-bc33-065e834d1b81/rock.png?v=1681602623805";
        } else if (this === "paper") {
          playerHand.src =
            "https://cdn.glitch.global/361f528c-ba2e-4ccd-bc33-065e834d1b81/paper.png?v=1681602621719";
        } else {
          playerHand.src =
            "https://cdn.glitch.global/361f528c-ba2e-4ccd-bc33-065e834d1b81/scissors.png?v=1681602626712";
        }
        if (computerChoice === "rock") {
          computerHand.src =
            "https://cdn.glitch.global/361f528c-ba2e-4ccd-bc33-065e834d1b81/rock.png?v=1681602623805";
        } else if (computerChoice === "paper") {
          computerHand.src =
            "https://cdn.glitch.global/361f528c-ba2e-4ccd-bc33-065e834d1b81/paper.png?v=1681602621719";
        } else {
          computerHand.src =
            "https://cdn.glitch.global/361f528c-ba2e-4ccd-bc33-065e834d1b81/scissors.png?v=1681602626712";
        }
        
        
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
