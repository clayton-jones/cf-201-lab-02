'use strict';

var userName = prompt('What is your name?');
alert('Hi, ' + userName + ', welcome to my awesome website. Impressed?');
alert('Here is a little quiz to help you get to know me. Please answer yes/no or y/n.');

var userAnswerAge = prompt('Am I 27 years old?').toLowerCase();
console.log(userAnswerAge);
if (userAnswerAge === 'yes' || userAnswerAge === 'y') {
  // console.log('Correct!');
  alert('Correct!');
} else {
  // console.log('Incorrect! I am 27 years old.');
  alert('Incorrect! I am 27 years old.');
}

var userAnswerHobbies = prompt('Is one of my hobbies origami?').toLowerCase();
console.log(userAnswerHobbies);

if (userAnswerHobbies === 'no' || userAnswerHobbies === 'n') {
  // console.log('Correct!');
  alert('Correct!');
} else {
  // console.log('Incorrect! Origami is not one of my hobbies.');
  alert('Incorrect! Origami is not one of my hobbies.');
}

var userAnswerCollege = prompt('Did I attend college at the University of Washington?').toLowerCase();
console.log(userAnswerCollege);
if (userAnswerCollege === 'yes' || userAnswerCollege === 'y') {
  console.log('Correct!');
  alert('Correct!');
} else {
  // console.log('Incorrect. I did attend the UW.');
  alert('Incorrect! I did attend the UW.');
}

var userAnswerJob = prompt('Am I currently working as a supply chain manager at Amazon?').toLowerCase();
console.log(userAnswerJob);
if (userAnswerJob === 'yes' || userAnswerJob === 'y') {
  // console.log('Incorrect! I am currently working as a massage therapist.');
  alert('Incorrect! I am currently working as a massage therapist.');
} else {
  // console.log('Correct! I am a massage therapist.');
  alert('Correct! I am a massage therapist.');
}

var userAnswerFuture = prompt('Am I currently attending Code Fellows to learn to be a JavaScript developer in the future?').toLowerCase();
console.log(userAnswerFuture);
if (userAnswerFuture === 'yes' || userAnswerFuture === 'y') {
  // console.log('Correct!');
  alert('Correct!');
} else {
  // console.log('Incorrect. It is true!');
  alert('Incorrect! It is true!');
}

alert('Thank you for taking the time to learn a little bit about me, ' + userName + '! Take care.');
