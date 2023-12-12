'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
//*handling click Event
// const secretNumber = Math.trunc(Math.random() * 20) + 1; //use Math method to random between 1 and 20
// document.querySelector('.number').textContent = secretNumber;

// let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//   const tryguess = Number(document.querySelector('.guess').value);
//   console.log(tryguess, typeof tryguess);

//   if (!tryguess) {
//     document.querySelector('.message').textContent = '⛔ No Number';
//   } else if (tryguess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number';
//   } else if (tryguess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'Too High.Try again';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (tryguess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low.Try again';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
//* implement Game Logic
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const tryGuess = Number(document.querySelector('.guess').value);
  console.log(tryGuess, typeof tryGuess);

  if (!tryGuess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  } else if (tryGuess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !';
    document.querySelector('body').style.backgroundColor = '#49be25';
    document.querySelector('.number').style.width = '30rem';
  } else if (tryGuess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🎉 Too High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (tryGuess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉 Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
