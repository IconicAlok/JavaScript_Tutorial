// super = used in classes to call the constructor or
//          access the properties and method of a parent (supperclass)
//          this = this object
//          super = the parent

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this. runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hwak extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hwak = new Hwak("hwak", 3, 15);

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)
rabbit.run();

console.log(fish.name)
console.log(fish.age)
console.log(fish.swimSpeed)
fish.swim();

console.log(hwak.name)
console.log(hwak.age)
console.log(hwak.flySpeed)
hwak.fly();