// object = a collection of related properties and/or method
//          can represent real world objects (people, products, place)
//          object = (key:value,
//                    function())

const person1 = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log("Hi!, iam Spongebob!")
    },
    eat: function(){console.log("I am easting a craby a Krabby Patty")},
}

const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey!, iam Patrick..."),
    eat: () => console.log("I am easting roast beef, chicken and pizza"),
}


person1.sayHello();
person1.eat();


person2.sayHello();
person2.eat();
