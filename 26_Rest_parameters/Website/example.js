// rest paramters = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//                  spread = expands an array into seperate elements
//                  rest = bundle seperate elements into an array

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
} 

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
} 

// const total = sum(1, 2, 3, 4, 5);
// console.log(`Your total is $${total}`);

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);