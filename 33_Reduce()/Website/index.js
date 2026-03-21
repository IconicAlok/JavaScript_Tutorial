// .reduce() = reduce the elements of an array 
//             to a single element

const prices = [5, 30, 20, 25, 10, 15];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){       //accumulator = previous | element = next
  return accumulator+element;
}

//----------example 2----------//

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum)
console.log(maximum);

function getMax(accumulator, element){
 return Math.max(accumulator, element);
}
function getMin(accumulator, element){
 return Math.min(accumulator, element);
}