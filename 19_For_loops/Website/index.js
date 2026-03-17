// for loop = repeat some code  LIMITED amount of times

/*
for(let i=10; i > 0; i-=3){
  console.log(i);
}
console.log("Heppy new year!");
*/

console.log("Continue statement; escape while iteration 13")
for(let i=1; i<= 20; i++){
  if(i == 13){
    continue;
  }
  else{
    console.log(i);
  }
}




console.log("Break statement break in iteration 13")
for(let i=1; i<= 20; i++){
  if(i == 13){
    // continue;
    break;
  }
  else{
    console.log(i);
  }
}

