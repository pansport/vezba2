// https://www.youtube.com/watch?v=YSEsSs3hB6A&list=PLRD1Niz0lz1uR4W3ms6DygWMjXW-6hDB_&index=18&ab_channel=CodewithAniaKub%C3%B3w
const grid = document.querySelector(".grid");
let doodlerLeftSpace = 50;
let doodlerBottomSpace = 150;
let doodler;
let isGameOver = false;
let platformCount = 5;
const platforms = [];
let upTimerID;
let downTimerID;
let isJumping;

function createDoodler() {
  doodler = document.createElement("div");
  doodler.classList.add("doodler");
  grid.appendChild(doodler);
  doodlerLeftSpace = platforms[0].left + 12;
  doodlerBottomSpace = platforms[0].bottom + 15;
  doodler.style.left = doodlerLeftSpace + "px";
  doodler.style.bottom = doodlerBottomSpace + "px";
}

class Platform {
  constructor(newPlatformBottom) {
    this.bottom = newPlatformBottom;
    this.left = Math.random() * 315;
    this.visual = document.createElement("div");

    const visual = this.visual;
    visual.classList.add("platform");
    visual.style.bottom = this.bottom + "px";
    visual.style.left = this.left + "px";

    grid.appendChild(visual);
  }
}

function createPlatforms() {
  for (let i = 0; i < platformCount; i++) {
    let platformGap = 600 / platformCount;
    let newPlatformBottom = 100 + i * platformGap;
    let newPlatform = new Platform(newPlatformBottom);
    platforms.push(newPlatform);
  }
}

function movePlatforms() {
  if (doodlerBottomSpace > 200) {
    platforms.forEach((platform) => {
      platform.bottom -= 4;
      let visual = platform.visual;
      visual.style.bottom = platform.bottom + "px";
    });
  }
}

function jump() {
  clearInterval(downTimerID);
  isJumping = true;

  upTimerID = setInterval(function () {
    doodlerBottomSpace += 20;
    doodler.style.bottom = doodlerBottomSpace + "px";

    if (doodlerBottomSpace > 350) {
      fall();
    }
  }, 30);
}

function fall() {
  clearInterval(upTimerID);
  isJumping = false;

  downTimerID = setInterval(function () {
    doodlerBottomSpace -= 5;
    doodler.style.bottom = doodlerBottomSpace + "px";

    if (doodlerBottomSpace <= 0) {
      gameOver();
    }
  }, 30);
}

function gameOver() {
  console.log("game over");
  isGameOver = true;
  clearInterval(upTimerID);
  clearInterval(downTimerID);
}

function control(event) {
  if (event.key === "ArrowLeft") {
    // move left
  } else if (event.key === "ArrowRight") {
    // move right
  } else if (event.key === "ArrowUp") {
    // move straight up
  }
}

function start() {
  if (!isGameOver) {
    createPlatforms();
    createDoodler();
    setInterval(movePlatforms, 30);
    // jump();
  }
}
start();
