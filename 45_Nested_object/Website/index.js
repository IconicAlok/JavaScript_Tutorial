// Nested object = object inside of other objects. 
//                  Allow you to represent more complex data structures.
//                  child object is enclosed by a parent object.

//                  person(Address{}, contact info{})
//                  shopping cart(keyboard{}, mouse{}, monitor{})

// Example 1: Person with nested address and contact info
let person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isEmployed: true,
    hobbies: ["Jellyfishing", "Karate", "Cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isEmployed);
console.log(person.hobbies[2]); // Jellyfishing
for(const property in person.address){
    console.log(person.address[property]);
}

// Example 2: Shopping cart with nested items
let shoppingCart = {
    items: [
        {
            name: "Keyboard",
            price: 50,
            quantity: 1
        },
        {
            name: "Mouse",
            price: 25,
            quantity: 2
        },
        {
            name: "Monitor",
            price: 200,
            quantity: 1
        }
    ],
    total: 300
};

console.log(shoppingCart.items[0].name); // Keyboard
console.log(shoppingCart.items[1].price); // 25
console.log(shoppingCart.total); // 300

// ------- Example 3 --------
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // Nested object
    }
} 
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("Spongebob Squarepants", 30, "124 Conch St.", 
                                                        "Bikini Bottom", 
                                                        "Int. Water"); 
const person2 = new Person("Patrick Star", 37, "128 Conch St.", 
                                                "Bikini Bottom", 
                                                "Int. Water");
const person3 = new Person("Squidward Tentacles", 45, "126 Conch St.", 
                                                      "Bikini Bottom", 
                                                      "Int. Water");
console.log(person1.address.country); 
console.log(person2.address.country);