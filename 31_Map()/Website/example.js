// .map() = accept a callback and applies that function
//          to each element of an array, then return a new array

const students = ["Spogebob", "Patrick", "Squidward", "Sandy"];
const studentUpper = students.map(upperCase);
const studentLower = students.map(lowerCase);

console.log(studentLower);

function upperCase(element) {
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}
