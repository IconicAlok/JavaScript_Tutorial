// sort() = method used to sort elements of an array in place 
//          sortes element in strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + number + symbols) as strings

// let fruits = ["apple", "orange", "banana", "coconut","pineapple"];
numbers = [1,5,3,2,6,4,10,7,9,12,15,11];

numbers.sort((a , b) => a - b);
// for reverse order
numbers.sort((a,b)=> b - a);

console.log(numbers);

// object

const people = [{name:"Spongebob", age:30, gpA:3.00},
                {name:"Patrick", age:37, gpA:1.50},
                {name:"Squidword", age:31, gpA:2.50},
                {name:"Sandy", age:27, gpA:4.00}];
// by age
people.sort((a,b)=> a.age - b.age);
// for reverse order
people.sort((a,b)=> b.age - a.age);

// by gpa property
people.sort((a,b)=> a.gpA - b.gpA);
// for reverse order
people.sort((a,b)=>b.gpA - a.gpA);

//name (string data type property value)
people.sort((a,b)=> a.name.localeCompare(b.name));
// for reverse order
people.sort((a,b)=> b.name.localeCompare(a.name));

console.log(people);
