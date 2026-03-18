// spread operator = ... allows an iterable such as an
//                  array or string to be expanded
//                  into seperate elements
//                  (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

// console.log(minimum);
let username = "Alokkuri";
let letters = [...username].join("-");
// console.log(letters);

let fruits = ["Apple", "Ornage", "Banana"];
let vegitables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegitables, "eggs", "milk"]; //shallow copy (different datastructure)
console.log(foods);
