const game = () => {
  let pScore = 0;
  let cScore = 0;
  
  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", ()=> {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play match
  const playMatch = ()=>{
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const conputerHand = document.querySelector(".computer-hand");
    
    //Computer's options
    const computerOptions = ["rock","paper","scissors"];
    const computerNumber = Math.floor(Math.random() * 3);
    options.forEach()=>
    computerOptions[computerNumber];
    
  };
  
  
  //call all inner functions
  startGame();
  playMatch();
};

//start game function
game();