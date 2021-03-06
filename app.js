// Luis Combariza Jan 2, 2021 : luis_combariza@outlook.com
// Game logit and event control

/* The purpose of this function is to encapsulate smaller logical functions
that create the game logic based on user click events.  
*/
const game = () => {
  let pScore = 0;
  let cScore = 0;

  // This function starts the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    console.log("here");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // This function takes care of the match logic
  const playMatch = () => {
    const options = document.querySelector(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // Computer choice options by using random()
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option=>{
        option.addEventListener("click", function(){
             const computerNumber = Math.floor(Math.random() * 3);
             const computerChoice = computerOptions[computerNumber];
            

        });
    });

  };

  const compareHands = (playerChoice, computerChoice)=> {
      const winner = document.querySelector(".winner");
      // Check for a tie
      if(playerChoice === computerChoice){
          winner.textContent = "It is a tie";
          return;
      }
      // Check for Rock
      if(playerChoice === 'Rock')

  }


  // Invoke inner functions
  startGame();
  playMatch();
};
// Invoke game function
game();
