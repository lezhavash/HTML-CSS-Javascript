"use strict";
// document.querySelector(".message").textContent = "Corrent Number";
// document.querySelector(".guess").value = "23";
// console.log(document.querySelector(".guess").value);

let newNumber = Math.trunc(Math.random() * 20) + 1;
console.log(newNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number";
  }

  if (score > 1) {
    if (newNumber === guess) {
      document.querySelector(".message").textContent = "✅ Currect Number";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = newNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess > newNumber) {
      document.querySelector(".message").textContent = "⬇️ Lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "⬆️ Upper";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "🔂 You lose";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "?";
  newNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(newNumber);
});
