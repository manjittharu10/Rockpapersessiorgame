const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const box = document.getElementById('box');
let counter=1;
let userScore = 0;
let manjitScore = 0;
let restartBtn = null;

function getManjitChoice() {
  const tharu = ["rock", "paper", "scissors"];
  const predictor = Math.floor(Math.random() * tharu.length);// we can take length 3 here.
  return tharu[predictor];
}

function gamePlay(userChoice) {
  const manjitChoice = getManjitChoice();

  if (userChoice === manjitChoice) {
    result.textContent =
      `It's a tie! Both chose ${manjitChoice}
User: ${userScore} | Manjit: ${manjitScore}`;
  } 
  else if (
    (userChoice === "rock" && manjitChoice === "scissors") ||
    (userChoice === "paper" && manjitChoice === "rock") ||
    (userChoice === "scissors" && manjitChoice === "paper")
  ) {
    userScore++;
    result.textContent =
      `User wins! ${userChoice} beats ${manjitChoice}
User: ${userScore} | Manjit: ${manjitScore}`;
  } 
  else {
    manjitScore++;
    result.textContent =
      `Manjit wins! ${manjitChoice} beats ${userChoice}
User: ${userScore} | Manjit: ${manjitScore}`;
  }
}


buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (counter > 5) {
      result.textContent = `Game Over!
Final Score → User: ${userScore} | Manjit: ${manjitScore}`;

      buttons.forEach(btn => btn.disabled = true);

      if (!restartBtn) {
        restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart Game";
        restartBtn.className="bg-red-700 text-white-200 ring-1 rounded-md mt-10";
        restartBtn.addEventListener("click", reset);
        box.appendChild(restartBtn);
      }
      return;
    }

    gamePlay(button.id);
    counter++;
  });
});

function reset() {
  counter = 1;
  userScore = 0;
  manjitScore = 0;
  result.textContent = "";

  buttons.forEach(btn => btn.disabled = false);

  restartBtn.remove();
  restartBtn = null;
}
