// function declaration = define a resuable block of code 
//                        that perform a specific task 

// function expression = a way to define function as 
//                       values or variables

// const hello = function(){
//   console.log("Hello");
// }
// hello();

//------------------//

// setTimeout(callback, 3000);

setTimeout(function(){
  console.log("Hello");
},3000)

// In javascript it is legal to pass a whole function as a argument ; treated as a value;

//-----------------------------//

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
  return Math.pow(element,2);
});

const cubes = numbers.map(function(element){
  return Math.pow(element, 3); 
});

const evenNums = numbers.filter(function(element){
  return element % 2 === 0
})

const oddNums = numbers.filter(function(element){
  return element % 2 !== 0
})
const total = numbers.reduce(function(accumulator, element){
  return accumulator + element;
})

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums)
console.log(total);