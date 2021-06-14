"use strict";

// generating random number for the ? field
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

// logic to validate user Input
document.querySelector(".check").addEventListener("click", function () {
  const enteredNumber = Number(document.querySelector(".guess").value);
  console.log(enteredNumber, typeof enteredNumber);

  if (!enteredNumber) {
    document.querySelector(".message").textContent = "Please Enter a Number!!";
  } else if (enteredNumber > 20) {
    document.querySelector(".message").textContent = "Too High Input 📈";
  } else if (enteredNumber < 1) {
    document.querySelector(".message").textContent = "Too Low Input 📉";
  } else if (enteredNumber === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Congratulations 🔥";
  } else {
    document.querySelector(".message").textContent = "Wrong Guess 🤭";
  }
});
