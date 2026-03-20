// .filter() = creating a new array filtering 
//             out elements 

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumber = numbers.filter(isEven);
let oddNumber = numbers.filter(isOdd);
console.log(oddNumber);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0
}