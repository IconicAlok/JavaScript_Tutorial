// .filter() = creating a new array filtering 
//             out elements 

const ages = [16, 17, 18, 18, 19, 20];
const childrens = ages.filter(children);
const adults = ages.filter(isAdult);

console.log(childrens);

function isAdult(element){
    return element >= 18;
}

function children(element){
    return element < 18;
}