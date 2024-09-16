"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  // tying to make the code dry so i declared a this function
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    // "⛔ No Number...";
    displayMessage("⛔ No Number...");

    // when the guess is correct 👍
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    // "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30vw";

    document.querySelector(".guess").style.color = "#000";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ?
      // "📈 Too high" : "📉 Too low";

      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");

      score--;

      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      // "💥 You lost the game";
      displayMessage("💥 You lost the game");

      document.querySelector(".score").textContent = 0;
    }
  }
  //      else if (guess > secretNumber) {
  //         if (score > 1) {
  //             document.querySelector('.message').textContent =
  //             "📈 Too high";

  //             score--;

  //             document.querySelector('.score').textContent =
  //             score;

  //         } else {
  //             document.querySelector('.message').textContent =
  //             "💥 You lost the game";

  //             document.querySelector('.score').textContent =
  //             0;
  //         }

  //          // when the guess is too low
  //     } else if (guess < secretNumber) {
  //         if (score > 1) {
  //             document.querySelector('.message').textContent =
  //             "📉 Too low";

  //             score--;

  //             document.querySelector('.score').textContent =
  //             score;

  //         } else  {
  //             document.querySelector('.message').textContent =
  //             "💥 You lost the game";

  //             document.querySelector('.score').textContent =
  //             0;
  //         }
  //     }
});

// The play again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15vw";

  document.querySelector(".guess").style.color = "#eee";

  document.querySelector(".number").textContent = "?";

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent =
  // "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".guess").value = "";

  document.querySelector(".score").textContent = score;
});
