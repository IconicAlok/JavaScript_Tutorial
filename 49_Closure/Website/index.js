// closure() = a function defined inside of another function 
//             the inner function has access to the variables 
//             and the scope to the outer function .
//             allow private variables and state maintenance
//             use frequestly in JS framework : React, Vue, Angular

function outer(){
  let message = "hello";
  function inner(){
    console.log(message);
  }
  inner();
}
message = "goodbye" // no access to the message variable. different message variable, in a different scope, 
outer();



// Program 1

function createCounter(){

  let count = 0 // security

  function increment(){
    count++;
    console.log(`Count incrieased to ${count}`);
  }
  function getCount(){
    return count;
  }


  return { increment, getCount }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment(); // state maneged 
console.log(counter.count); // undefined 

//counter.count = 0;
//console.log(count) // ref.  error count not defined 

console.log(`The courrent count is ${counter.getCount()}`);



// Program - 2
function createGame(){

  let score = 0;

  function incrementScore(points){
    score+= points;
    console.log(`+${points}pts`)
  }

  function decrementScore(points){
    score-= points;
    console.log(`-${points}pts`)
  }

  function getScore(){
    return score;
  }

  return {incrementScore, decrementScore, getScore }
}

const game = createGame();

game.incrementScore(5);
game.incrementScore(5);
game.decrementScore(2);

console.log(`The final score is ${game.getScore()}pts`);


