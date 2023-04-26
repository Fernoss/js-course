'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Let's goooo!`;

console.log(document.querySelector('.message').textContent);

 document.querySelector('.score').textContent = 50;

document.querySelector('.guess').value = 28;
console.log(document.querySelector('.guess').value);
*/
// Create random number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Creating a variable for the score, used in function()
let score = 20;
// Variable for highscore
let highscore = 0;

// Adding an EventListener with 'click' for the .check class (btn)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Not a number!';
    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct!';
    // Manipulate <body> backgroundColor when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Widen the number box when player wins
    document.querySelector('.number').style.width = '30rem';
    // Change the .guess backgroundColor back to normal
    document.querySelector('.guess').style.backgroundColor = '#60b347';
    // To reveal the number after player wins
    document.querySelector('.number').textContent = secretNumber;
    // Assigning highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess').style.backgroundColor = '#dc2626';
      document.querySelector('.message').textContent =
        '👆 The number is higher!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '☠️ You lost the game!';
    }
    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess').style.backgroundColor = '#dc2626';
      document.querySelector('.message').textContent =
        '👇 The number is lower!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '☠️ You lost the game!';
    }
  }
});
// Challenge #1
// Create an EventListener for 'Again' to reload the page/start over
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
