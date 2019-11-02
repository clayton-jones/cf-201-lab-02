'use strict';

// Asking user's name
var userName = prompt('What is your name?');
// alert('Hi, ' + userName + ', welcome to my awesome website. Impressed?');
// alert('Here is a little quiz to help you get to know me. Please answer yes/no or y/n.');

var score = 0;

// // First question

// function firstQuestion() {
//   var userAnswerAge = prompt('Am I 27 years old?').toLowerCase();
//   // console.log(userAnswerAge);
//   if (userAnswerAge === 'yes' || userAnswerAge === 'y') {
//     // console.log('Correct!');
//     alert('Correct!');
//     score++;
//   } else {
//     // console.log('Incorrect! I am 27 years old.');
//     alert('Incorrect! I am 27 years old.');
//   }
// }
// firstQuestion();


// //  Second question

// function secondQuestion() {
//   var userAnswerHobbies = prompt('Is one of my hobbies origami?').toLowerCase();
//   // console.log(userAnswerHobbies);
  
//   if (userAnswerHobbies === 'no' || userAnswerHobbies === 'n') {
//     // console.log('Correct!');
//     alert('Correct!');
//     score++;
//   } else {
//     // console.log('Incorrect! Origami is not one of my hobbies.');
//     alert('Incorrect! Origami is not one of my hobbies.');
//   }
// }
// secondQuestion();


// // Third question

// function thirdQuestion() {
//   var userAnswerCollege = prompt('Did I attend college at the University of Washington?').toLowerCase();
//   // console.log(userAnswerCollege);
//   if (userAnswerCollege === 'yes' || userAnswerCollege === 'y') {
//     // console.log('Correct!');
//     alert('Correct!');
//     score++;
//   } else {
//     // console.log('Incorrect. I did attend the UW.');
//     alert('Incorrect! I did attend the UW.');
//   }
// }
// thirdQuestion();

// // Fourth question

// function fourthQuestion() {
//   var userAnswerJob = prompt('Am I currently working as a supply chain manager at Amazon?').toLowerCase();
//   // console.log(userAnswerJob);
//   if (userAnswerJob === 'yes' || userAnswerJob === 'y') {
//     // console.log('Incorrect! I am currently working as a massage therapist.');
//     alert('Incorrect! I am currently working as a massage therapist.');
//   } else {
//     // console.log('Correct! I am a massage therapist.');
//     alert('Correct! I am a massage therapist.');
//     score++;
//   }
// }
// fourthQuestion();

// // Fifth question

// function fifthQuestion() {
//   var userAnswerFuture = prompt('Am I currently attending Code Fellows to learn to be a JavaScript developer in the future?').toLowerCase();
//   // console.log(userAnswerFuture);
//   if (userAnswerFuture === 'yes' || userAnswerFuture === 'y') {
//     // console.log('Correct!');
//     alert('Correct!');
//     score++;
//   } else {
//     // console.log('Incorrect. It is true!');
//     alert('Incorrect! It is true!');
//   }
// }
// fifthQuestion();

// // Sixth question

// function sixthQuestion() {
//   // creates random number between 1 and 100 for user to guess
//   var myNumber = Math.floor((Math.random() * 100) + 1);
//   // console.log(myNumber); // used to quickly test correct answers
  
//   // asks user to guess number (first guess)
//   var userGuess = parseInt(prompt('I am thinking of a number between 1 and 100. What is it? You have four guesses.'));
//   // console.log('userGuess number 1 to 100: ', userGuess);
  
//   // tells user if they got it right, and if not, to keep guessing
//   for (var i = 0; i < 4; i++) {
//     // console.log(userGuess);
//     if (userGuess === myNumber) {
//       alert('You got it! Amazing!');
//       score++;
//       break;
//     } else if (i === 3) {
//       alert('Good try! The number was ' + myNumber);
//     } else if (userGuess < myNumber) {
//       alert('Too low!');
//       userGuess = parseInt(prompt('Guess higher! Your last guess was ' + userGuess + '. ' + (3 - i) + ' guesses left.'));
//     } else {
//       alert('Too high!');
//       userGuess = parseInt(prompt('Guess lower! Your last guess was ' + userGuess + '. ' + (3 - i) + ' guesses left.'));
//     }
//   }
// }
// sixthQuestion();

//Seventh Question

function seventhQuestion() {
  var myFavVideogames = ['skyrim', 'borderlands 3', 'teamfight tactics', 'the witcher 3'];
  var userVideogameCorrect = false;
  var numOfGuesses = 0;
  var userVideogameGuess = prompt('What is one of my favorite video games? You have 6 guesses.').toLowerCase();
  // console.log('User guess: ', userVideogameGuess);
  
  // testing if user's guess is equal to any of the games in the array
  while (userVideogameCorrect === false && numOfGuesses < 6) {
    // console.log(userVideogameGuess);
    numOfGuesses++;
    for (var j = 0; j < myFavVideogames.length; j++) {
      if (userVideogameGuess === myFavVideogames[j]) {
        // console.log('games inside array: ', myFavVideogames[j]);
        alert('You are right!');
        score++;
        userVideogameCorrect = true;
        break;
      }
    }
    if (userVideogameCorrect === true) {
      break;
    } else {
      userVideogameGuess = prompt('Guess again! ' + (6 - numOfGuesses) + ' remaining.').toLowerCase();
    }
  }
  alert('These were all of the possible answers: ' + myFavVideogames);
}
seventhQuestion();

// else {
//   userVideogameGuess = prompt('Guess again!' + (6 - numOfGuesses) + ' remaining.').toLowerCase;
//   numOfGuesses++;
// }



// Farewell message
alert('Thank you for taking the time to learn a little bit about me, ' + userName + '! Your final score is ' + score + ' out of 7.');
