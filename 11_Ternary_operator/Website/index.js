// ternary operator = a short to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse

// let age = 12;
// let message = age >= 18 ? `You're an adult` : `You're a minor`;
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? `good morning` : `good afternoon`;
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

let parchaseAmount = 99;
let discount = parchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total $${parchaseAmount - parchaseAmount * (discount / 100)}`,
);
