// string slicing = creating a substring 
//                  from a portion of other string

//                  string.slice(start, end)


const fullName = "Mr.Alok Kuri";

// let firstName = fullName.slice(0,4);
// let lastName = fullName.slice(5,9);
// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-4);
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1 )

console.log(firstName);
console.log(lastName);

let email = "alokkuri@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);