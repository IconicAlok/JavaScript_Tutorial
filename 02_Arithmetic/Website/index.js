// arithmetic operator = operands (values, variable, etc.)
//                      (+ - * /)
//                      ex. 11 = x + 5

let student = 30;

// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student ** 2;
// student = student % 2;
// let extraStudent = student % 3;

// student += 1;
// student -= 1;
// student *= 2;
// student /= 2;
// student **= 2;
// student %= 2;

// student++;
// student--;


/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication  & division & modulo
    4. addition & substraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2
let result = 6 / 2 ** (2 + 5);
console.log(result)
