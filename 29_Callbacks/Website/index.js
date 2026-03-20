// callbacks = A function that is passed as a arguments
//             to another function.

//              used to handle asynchronous operations:
//              1. Reading a file
//              2. Network requests
//              3. Interacting with database

//  "Hey, when you're done, call this next.""



hello(wait); // calling callback function 

function hello(callback){
    console.log("Hello!")
    setTimeout(function(){
        callback();
    },2000);
    
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

