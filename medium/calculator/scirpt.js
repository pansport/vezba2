const display = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let current = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "=") {
      let calculation = current.join("");
      display.textContent = eval(calculation);
      current = [];
    } else if (button.value === "delete") {
      current = [];
      display.textContent = "0";
    } else {
      current.push(button.value);
      display.textContent = current.join("");
    }
  });
});
