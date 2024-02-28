"use strict";
let newNumber = Math.trunc(Math.random() * 20) + 1;
console.log(newNumber);
let score = 20;
let highScore = 0;

const displayMessig = function (messige) {
  document.querySelector(".message").textContent = messige;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessig("⛔️ No Number");
  }

  if (score > 1) {
    if (newNumber === guess) {
      displayMessig("✅ Currect Number");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = newNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess > newNumber) {
      displayMessig("⬇️ Lower");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessig("⬆️ Upper");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessig("🔂 You lose");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessig("Start guessing...");
  document.querySelector(".guess").value = "?";
  newNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(newNumber);
});
