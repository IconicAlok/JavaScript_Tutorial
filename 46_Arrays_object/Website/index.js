// arrays of object =
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


              
// fruits.push({name:"grapges", color: "purple", calories: 62})
// fruits.pop()
// fruits.splice(1,2)
// console.log(fruits);

//---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit))
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color))
fruits.forEach(fruit => console.log(fruit.calories))
//---------- map ----------
const fruitNames = fruits.map(fruit=> fruit.name);
const fruitColors = fruits.map(fruit=> fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);
// ---------- filter ----------
const yellowFruits = fruits.filter(fruit=>(fruit.color ==="yellow"))
const lowCaloriesFruits = fruits.filter(fruit=> fruit.calories<=100)
const highCaloriesFruits = fruits.filter(fruit=>(fruit.calories >= 100));
console.log(lowCaloriesFruits);
// ---------- reduce ----------
const maxFruits = fruits.reduce((max, fruit)=> fruit.calories > 
                                               max.calories ? 
                                               fruit : max);
const minFruits = fruits.reduce((min, fruit)=> fruit.calories < 
                                               min.calories ? 
                                               fruit : min);

console.log(maxFruits);
console.log(minFruits);