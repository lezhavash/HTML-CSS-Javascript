"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnhnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

diceEL.classList.add("hidden");
score0EL.textContent = 0;
score1EL.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

btnroll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnhold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEL.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnhnew.addEventListener("click", function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  document.querySelector(`.player--0`).classList.add("player--active");
  playing = true;
  diceEL.classList.remove("hidden");
});
