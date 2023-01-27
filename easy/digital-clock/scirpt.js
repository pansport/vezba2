const date = new Date();
const day = `${date.getDate()}`.padStart(2, "0");
const month = `${date.getMonth() + 1}`.padStart(2, "0");
const year = date.getFullYear();

// datum
const dateContainer = document.querySelector(".date");

const html = `${day}.${month}.${year}.`;

dateContainer.insertAdjacentHTML("afterbegin", html);

// vreme
const setTime = function () {
  const date = new Date();
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  const seconds = `${date.getSeconds()}`.padStart(2, "0");

  if (hour >= 12) {
    document.getElementById("session").innerHTML = "PM";
  } else {
    document.getElementById("session").innerHTML = "AM";
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
};

setInterval(setTime, 1000);
