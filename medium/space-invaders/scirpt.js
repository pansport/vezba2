const container = document.querySelector(".container");
let playerStartPosition = 202;
// invaders starting positions
let invaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];
// array of all the squares on the board
let squares;
let direction = 1;
let goingRight = true;
let invadersRemoved = [];

const createSquares = function () {
  for (let i = 0; i < 225; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  squares = Array.from(document.querySelectorAll(".square"));
};
createSquares();

const drawInvaders = function () {
  for (let i = 0; i < invaders.length; i++) {
    if (!invadersRemoved.includes(i)) {
      squares[invaders[i]].classList.add("invader");
    }
  }
};
drawInvaders();

const removeInvaders = function () {
  for (let i = 0; i < invaders.length; i++) {
    squares[invaders[i]].classList.remove("invader");
  }
};

squares[playerStartPosition].classList.add("player");

// moving player left and right
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (playerStartPosition !== 209) {
      squares[playerStartPosition].classList.remove("player");
      playerStartPosition++;
      squares[playerStartPosition].classList.add("player");
    }
  }
  if (event.key === "ArrowLeft") {
    if (playerStartPosition !== 195) {
      squares[playerStartPosition].classList.remove("player");
      playerStartPosition--;
      squares[playerStartPosition].classList.add("player");
    }
  }
});

const moveInvaders = function () {
  const leftBorder = invaders[0] % 15 === 0;
  const rightBorder = invaders[invaders.length - 1] % 15 === 15 - 1;

  removeInvaders();

  if (rightBorder && goingRight) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += 16;
      direction = -1;
      goingRight = false;
    }
  }

  if (leftBorder && !goingRight) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += 15 - 1;
      direction = 1;
      goingRight = true;
    }
  }

  for (let i = 0; i < invaders.length; i++) {
    invaders[i] += direction;
  }

  drawInvaders();

  if (squares[playerStartPosition].classList.contains("invader")) {
    console.log("game over");
    clearInterval(game);
  }

  for (let i = 0; i < invaders.length; i++) {
    if (invaders[i] > squares.length - 15) {
      console.log("game over");
      clearInterval(game);
    }
  }

  if (invadersRemoved.length === invaders.length) {
    console.log("you win");
    clearInterval(game);
  }
};

const game = setInterval(moveInvaders, 500);

const shoot = function (event) {
  let laserPosition = playerStartPosition;
  let shooting;

  const moveLaser = function () {
    // console.log(laserPosition);
    if (laserPosition > 15) {
      squares[laserPosition].classList.remove("bullet");
      laserPosition -= 15;
      squares[laserPosition].classList.add("bullet");
    }

    if (squares[laserPosition].classList.contains("invader")) {
      squares[laserPosition].classList.remove("bullet");
      squares[laserPosition].classList.remove("invader");
      clearInterval(shooting);

      const invaderRemoved = invaders.indexOf(laserPosition);
      invadersRemoved.push(invaderRemoved);
    }
  };

  if (event.key === "s") {
    shooting = setInterval(moveLaser, 100);
  }
};

window.addEventListener("keydown", shoot);
