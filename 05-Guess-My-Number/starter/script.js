'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there's no input.
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.body.style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    
    //When guess is wrong!
  }else if (guess !== secretNumber) {
    if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber? '📈 Too high!' : '📉 Too low!';
        displayMessage(guess > secretNumber? '📈 Too high!' : '📉 Too low!')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😔 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }

    }
    
//    // When guess is too high
//    else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😔 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low.
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😔 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
 });

// Function in an Event Listener would only be called once the event is executed!
// The data of a program should always be available somewhere in our code and not just in the DOM

// Functionality of the Again (reset!) button.
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // restoring initial values of score and number variables.
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;

    //restoring initial conditions of message, number, score, guess input field
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = '';

    //restoring the original background color
    document.body.style = '#222';
    document.querySelector('.number').style.width = '15rem';
})