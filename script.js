"use strict";

// generating random number for the ? field
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 0;
// logic to validate user Input
document.querySelector(".check").addEventListener("click", function () {
  const enteredNumber = Number(document.querySelector(".guess").value);
  console.log(enteredNumber, typeof enteredNumber);

  if (!enteredNumber) {
    document.querySelector(".message").textContent = "Please Enter a Number!!";
  } else if (enteredNumber > secretNumber) {
    document.querySelector(".message").textContent = "Too High Input 📈";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (enteredNumber < secretNumber) {
    document.querySelector(".message").textContent = "Too Low Input 📉";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (enteredNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Congratulations 🔥";
    score++;
    document.querySelector(".score").textContent = score;
  }
});
