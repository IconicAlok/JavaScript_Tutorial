// rest paramters = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//                  spread = expands an array into seperate elements
//                  rest = bundle seperate elements into an array

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.","Spongebob","Squarepants","III");

console.log(fullName);