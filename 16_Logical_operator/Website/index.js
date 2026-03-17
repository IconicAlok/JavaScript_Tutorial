// logical operators = used to combine or manipulate boolean values 
//                     (true or false) 

//                     AND = && 
//                     OR = ||
//                     NOT = !

const temp = -250;

// if (temp > 0 && temp <= 30){
//   console.log(`The weather is GOOD`);
// }
// else{
//   console.log("Weather is BAD");
// }

if (temp <= 0 || temp > 30){
  console.log("Weather is BAD");
}
else{
  console.log(`The weather is GOOD`);
}

const isSunny = true;

if(!isSunny){
  console.log("It's CLOUDY");
}
else{
  console.log("It's SUNNY");
}