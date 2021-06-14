"use strict";

// function to change the backGroundColor
const changeBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

// generating random number for the ? field
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretNumber;

// default score
let score = 10;
document.querySelector(".score").textContent = score;

// Again button functionality
document.querySelector(".again").addEventListener("click", () => {
  score = 10;
  changeBackgroundColor("#222");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
});

// logic to validate user Input
document.querySelector(".check").addEventListener("click", function () {
  const enteredNumber = Number(document.querySelector(".guess").value);
  console.log(enteredNumber, typeof enteredNumber);

  // When there is no input
  if (!enteredNumber) {
    document.querySelector(".message").textContent = "Please Enter a Number!!";

    // When player Wins
  } else if (enteredNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Congratulations 🔥";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    // document.querySelector("body").style.backgroundColor = "#60b347";
    changeBackgroundColor("#60b347");

    // When guess is too High
  } else if (enteredNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High Input 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game 🔥";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too Low
  } else if (enteredNumber < secretNumber) {
    document.querySelector(".score").textContent = score;
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low Input 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game 🔥";
      document.querySelector(".score").textContent = 0;
      // document.querySelector("body").style.backgroundColor = "#FF0000";
      changeBackgroundColor("##FF0000");
    }
  }
});
