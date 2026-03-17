// variable scope = where a variable is recognized 
//                  and accessible (local vs global)

// let x = 1;
// let x = 2; // syntaxerror = Identifier 'x' has already been declared


let x = 3; // Global scope because outside of function
function2();

function function1(){
  // let x = 1; 
  // console.log(y); //ReferenceError: y is not defined
  let x = 1;
  console.log(x);
}

function function2(){
  // let y = 2;
  // console.log(x); //ReferenceError: x is not defined
  let x = 2;
  console.log(x);
}
