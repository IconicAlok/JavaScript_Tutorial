// Dates object = Object that containes values that represent dates and times.
//                those dates object can be changed or foramatted.

// Dates(year month day hours menute second ms)
// const date = new Date(2026, 2, 30, 9, 5, 0);
const date = new Date("2026-03-30T15:05:00Z");
// const date = new Date(170000000);

//Get Date
const date0 = new Date();
const year = date0.getFullYear();
const month = date0.getMonth(); //Start from zero (January 0, December 11)
const day = date0.getDate();
const hours = date0.getHours();
const minutes = date0.getMinutes();
const second = date0.getSeconds();
const dayOfWeek = date0.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(second);
console.log(dayOfWeek);

//Set Date
const date1 = new Date();
date1.setFullYear(2026);
date1.setMonth(2)
date1.setDate(30);
date1.setHours(9);
date1.setMinutes(24);
date1.setSeconds(30);

console.log(date1);

const date3 = new Date("2025-12-31");
const date4 = new Date("2026-01-01");

if(date4 > date3){
  console.log("Happy new year!");
}