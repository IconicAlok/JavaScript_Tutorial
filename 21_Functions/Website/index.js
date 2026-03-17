// function = A section of reusable code.
//            Declear code once, use it anywhere you want.
//            Call the function to execute that code.

/*
function happyBirthday(username, age){
  console.log("Happy birthday to you!")
  console.log("Happy birthday to you!")
  console.log(`Happy birthday dear ${username}!`)
  console.log("Happy birthday to you!")
  console.log(`You are ${age} years old!`)
}
happyBirthday("Alok Kuri", 28);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);
*/


function add(x, y){
  return x + y;
}
function subtract(x, y){
  return x - y;
}
function multiply(x ,y){
  return x * y;
}
function division(x , y){
  return x / y;
}

function isEven(number){
  return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
  return email.includes("@") ? true : false; 
}
console.log(isValidEmail("alokkuri98@gmail.com"));
console.log(isValidEmail("Elonmask.com"));
console.log(isValidEmail("Zuckerburg@Meta.com"));