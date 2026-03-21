// static = keyword that defines properties or method that belong 
//          to a class itself rather than the object created
//          from that class(class own anything static, not the object)

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumfernce(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumfernce(10))
console.log(MathUtil.getArea(10));

//--------- example 2 --------- //

class User{
    static userCount = 0;
    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} user online`);
    }
    sayHello(){
        console.log(`My username is ${this.userName}`);
    }
}
const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();