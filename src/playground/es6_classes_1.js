'use strict';

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello, I'm ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// class Student extends Person{
//     constructor(name, age, major){
//         super(name, age);
//         this.major = major;
//     }
//     getDescription(){
//         let description = super.getDescription();
//         if(this.hasMajor()){
//             description += ` ${this.name} is majoring in ${this.major}`
//         }
//         return description;
//     }
//     hasMajor(){
//         return !!this.major;
//     }
// }

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

// const me = new Student('Steve', 47, 'Mathematics');
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getGreeting());
// console.log(other.getDescription());

const me = new Traveller('Steve', 47, 'Portland');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());

