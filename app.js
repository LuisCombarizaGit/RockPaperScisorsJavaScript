// Luis Combariza Jan 2, 2021 : luis_combariza@outlook.com
// Game logit and event control

/* The purpose of this function is to encapsulate smaller logical functions
that create the game logic based on user click events.  
*/

console.log("here");
const game = () => {
  let pScore = 0;
  let cScore = 0;

  console.log("here");
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    console.log("here");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
    });
  };

  // Invoke inner functions
  startGame();
};
// Invoke game function
game();
