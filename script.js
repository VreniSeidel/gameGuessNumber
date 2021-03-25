'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// When player win
const whenPlayersWin = function () {
  document.querySelector('.message').textContent = 'Correct Number!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

// Default settings style
const defaultSettingsStyle = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// Default settings content of the page
const defaultSettingsContent = function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
};

const whenPlayerLostTheGame = function () {
  document.querySelector('.message').textContent = 'You lost the game!';
  document.querySelector('.score').textContent = 0;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is not input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    // When player win
  } else if (guess === secretNumber) {
    whenPlayersWin();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too hight!' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else whenPlayerLostTheGame();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  defaultSettingsContent();
  defaultSettingsStyle();
});
