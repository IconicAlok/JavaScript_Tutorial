// string methods =  allow you to manipulate and work with text (String)

let userName = "Alok kuri";

console.log(userName.charAt(0)); //character at index
console.log(userName.indexOf("k")); //first occurance of string, charater
console.log(userName.lastIndexOf("k")); //last occurance of string 
console.log(userName.length); //length of string

userName = userName.trim(); //remove whitespace from before after string
userName = userName.toUpperCase(); //to make uppercase
userName = userName.toLowerCase(); //to make tolowercase
userName = userName.repeat(3); //repeat number of times
console.log(userName);

/*
let result = userName.startsWith(" "); //boolean cheack weather string strat with certain string, char

if(result){
  console.log(`Your user name can't begains  with ' '`);
}
else{
  console.log(userName);
}
*/

/*
let result = userName.endsWith(' '); // a string endswith ' ' or given value parameter cheack 
if(result){
  console.log(`Your user name can't ends  with ' '`);
}
else{
  console.log(userName);
}*/


let result = userName.includes(' '); // check string includes ' ' or NOT?
if(result){
  console.log(`Username can't includes ' '`);
}
else{
  console.log(userName);
}

//

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","/"); //replace character inside string

// phoneNumber = phoneNumber.padStart(25,"0"); 
// padStart method specified length how many character the string should be;
// secend parameter value with comma separated pad string with given character

//
phoneNumber = phoneNumber.padEnd(15,"0"); //character lenth string pading ends with given character
console.log(phoneNumber);