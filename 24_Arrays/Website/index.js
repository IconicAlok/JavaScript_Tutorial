// array = A variable like structure that can hold
//         more than one value.

let fruit = ["apple", "orange", "banana", "coconut"];

// fruit[3] = "coconut";
// fruit.push("coconut"); //to push an element at the end of the array
// fruit.pop()
// fruit.unshift("mango"); //add an element at the beginning of the array;
// fruit.shift() //move an element from the beginning

// fruit.sort(); //sort array element aphabetical order
fruit.sort().reverse(); //sort reverse order

let numFruits = fruit.length;
let index = fruit.indexOf("mango"); //something not present in the array list will return -1

//printing array element
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
//printing array elements reverse
for (let i = fruit.length - 1; i >= 0; i--) {
  console.log(fruit[i]);
}

//enhance version of for loop
for (let element of fruit) {
  console.log(element);
}
