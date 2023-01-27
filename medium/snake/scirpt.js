const container = document.querySelector(".container");
const scoreDisplay = document.querySelector("h2");
let points = 0;
let snakeCurrentPosition = 200;
let snakeBody = [snakeCurrentPosition];
let foodCurrentPosition;
let goingUp = false;
let goingDown = false;
let goingLeft = false;
let goingRight = false;

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
}

let squares = Array.from(document.querySelectorAll(".square"));

squares[snakeCurrentPosition].classList.add("snake");

const drawFood = function () {
  if (foodCurrentPosition) {
    squares[foodCurrentPosition].classList.remove("food");
  }
  const randomSquare = Math.floor(Math.random() * 256 + 1);
  foodCurrentPosition = randomSquare;
  squares[randomSquare].classList.add("food");
};
drawFood();

const getDirection = function (event) {
  if (event.key === "ArrowLeft") {
    goingUp = false;
    goingDown = false;
    goingLeft = true;
    goingRight = false;
  }
  if (event.key === "ArrowRight") {
    goingUp = false;
    goingDown = false;
    goingLeft = false;
    goingRight = true;
  }
  if (event.key === "ArrowUp") {
    goingUp = true;
    goingDown = false;
    goingLeft = false;
    goingRight = false;
  }
  if (event.key === "ArrowDown") {
    goingUp = false;
    goingDown = true;
    goingLeft = false;
    goingRight = false;
  }
};

window.addEventListener("keydown", getDirection);

const moveSnake = function () {
  if (squares[foodCurrentPosition].classList.contains("snake", "food")) {
    squares[foodCurrentPosition].classList.remove("food");
    snakeBody.push(foodCurrentPosition);
    points++;
    scoreDisplay.textContent = points;
    drawFood();
  }

  if (goingLeft) {
    if (snakeCurrentPosition < 1) {
      return;
    }
    squares[snakeCurrentPosition].classList.remove("snake");
    snakeCurrentPosition--;
    squares[snakeCurrentPosition].classList.add("snake");
  }
  if (goingRight) {
    if (snakeCurrentPosition > 254) {
      return;
    }
    squares[snakeCurrentPosition].classList.remove("snake");
    snakeCurrentPosition++;
    squares[snakeCurrentPosition].classList.add("snake");
  }
  if (goingUp) {
    if (snakeCurrentPosition < 16) {
      return;
    }
    squares[snakeCurrentPosition].classList.remove("snake");
    snakeCurrentPosition -= 16;
    squares[snakeCurrentPosition].classList.add("snake");
  }
  if (goingDown) {
    if (snakeCurrentPosition > 239) {
      return;
    }
    squares[snakeCurrentPosition].classList.remove("snake");
    snakeCurrentPosition += 16;
    squares[snakeCurrentPosition].classList.add("snake");
  }
};

const game = setInterval(moveSnake, 100);

// const growSnake = function () {
//   if (goingDown) {
//     squares[snakeCurrentPosition].classList.add("snake");
//   }
//   if (goingUp) {
//     squares[snakeCurrentPosition].classList.add("snake");
//   }
//   if (goingLeft) {
//     squares[snakeCurrentPosition].classList.add("snake");
//   }
//   if (goingRight) {
//     squares[snakeCurrentPosition].classList.add("snake");
//   }
// };
