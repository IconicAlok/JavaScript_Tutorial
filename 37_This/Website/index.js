// this = reference to the object where THIS is used
//        (the object depends on the immidiate object)
//        person.name = this.name

console.log(this);

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi! am ${this.name}`);},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`);}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! am ${this.name}`);},
    eat: ()=>console.log(`${this.name} is eating ${this.favFood}`),
    
    // When we use this within a arrow function its making a reference to that window object
    // our window object does have a name thats why its appearing empty | (undefined) our window object have fav food property 
}

person1.sayHello();
person1.eat();
person2.eat();