// destructuring = extract values from arrays and object,
//                  then align them to variables in a convenient way.
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring
//                  5 examples

// --------- example 1  --------- 
// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// --------- example 2  --------- 
// swap 2 elements in an array 

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// ----------- example 3  ----------- 
// assign array elements to variables
const allColors = ["red", "green", "blue", "orange", "purple", "black", "white"];

const [firstColor, secondColor, thirdColor, fourthColor, ...extraClolors] = allColors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(fourthColor);
console.log(extraClolors);



// ----------- example 5  -----------
// extract values from objects
function displayPerson({firstName, lastName, age, job="unemploy"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",

}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,

}

// const {firstName, lastName, age, job} = person1;
// const {firstName, lastName, age, job="unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

displayPerson(person1);
displayPerson(person2);