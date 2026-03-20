// .map() = accept a callback and applies that function
//          to each element of an array, then return a new array

const dates = ["2026-3-20","2026-4-30","2026-5-10"];
const formatedDates = dates.map(formatesDate);

console.log(formatedDates);

function formatesDate(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}