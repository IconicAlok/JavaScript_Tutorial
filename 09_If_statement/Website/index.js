// IF STATEMENT = if a condition is true, execute some code
//                if not, do something else

/*
let age = 13;
if(age >= 25){
  console.log(`You are old enough to enter this site`);
}
else{
  console.log(`You must be 18+ to enter this site`);
}
*/

/*
let time = 9;

if(time > 12){
  console.log(`Good morning`);
}
else{
  console.log(`Good afternoon`);
}
*/

/*
let isStudent = true;

if(isStudent){
  console.log("You are a student");
}
else{
  console.log("You are not a student")
}
*/

/*
let age = 25;
let hasLicense = true;
if(age >=  16){
  console.log("You are old enough to drive")
  if(hasLicense){
    console.log("You have your license!")
  }
  else{
    console.log("You don't have your license yet!")
  }
}
else{
  console.log("You must be 16+ to have a license")
}
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `You are TOO OLD to enter this site`;
  } else if (age == 0) {
    resultElement.textContent = `You have just born`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    resultElement.textContent = `You age can't be below 0`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
};
