const compChoise = document.querySelector(".computer-choise");
const yourChoise = document.querySelector(".your-choise");
const buttons = document.querySelectorAll("button");
let choise;
let choiseAutom;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const number = Math.floor(Math.random() * 3 + 1);

    if (number === 1) {
      compChoise.innerHTML = "🥌";
      choiseAutom = "rock";
    }
    if (number === 2) {
      compChoise.innerHTML = "📃";
      choiseAutom = "paper";
    }
    if (number === 3) {
      compChoise.innerHTML = "✂";
      choiseAutom = "scissors";
    }

    const clickedBtn = event.target;

    if (clickedBtn.className === "rock") {
      yourChoise.innerHTML = "🥌";
      choise = "rock";
    }
    if (clickedBtn.className === "paper") {
      yourChoise.innerHTML = "📃";
      choise = "paper";
    }
    if (clickedBtn.className === "scissors") {
      yourChoise.innerHTML = "✂";
      choise = "scissors";
    }
  });
});
