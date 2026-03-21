// arrow functions = a concise way to write a function expressions 
//                   good for simple functions that you use only once 
//                   (parameter) => somecode

// function hello(){
//   console.log("Hello");
// }

// const hello = function(){
//   console.log("Hello");
// }

const hello = (name, age) => {console.log(`Hello ${name}`);
                         console.log(`You are ${age} years old`);}
hello("Mr. Alok Kuri", 28);

setTimeout(()=>console.log("Hello"),3000);


const number = [1,2,3,4,5,6];
const squares = number.map((element)=>Math.pow(element,2));
const cube = number.map((element)=>Math.pow(element,3));
const evenNums = number.filter((element)=> element % 2 === 0);
const oddNums = number.filter((element)=>element %2 !== 0);
const total = number.reduce((accumulator, element)=> accumulator + element);

console.log(squares);
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);