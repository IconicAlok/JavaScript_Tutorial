// .filter() = creating a new array filtering
//             out elements

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(elements) {
  return elements.length <= 6;
}

function getLongWords(elements) {
  return elements.length > 6;
}
