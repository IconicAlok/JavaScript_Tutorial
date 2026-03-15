// RANDOM NUMBER GENERATOR

// Generate random number between 0-1
// let randomNum = Math.random();

// Random number between 1-100
// let randomNum = Math.floor(Math.random() * 100) + 1;

/*
// Random number between certain range
let min = 50;
let max = 100;
let randomNum = Math.floor(Math.random() * (max-min)) + min;

console.log(randomNum);
*/
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;
myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  randomNum4 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
  label4.textContent = randomNum4;
};
