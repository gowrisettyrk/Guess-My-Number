'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Please enter a number';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎊🎉 Correct answer';
    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😓';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😓';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
