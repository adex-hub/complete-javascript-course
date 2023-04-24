'use strict';

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function() {
    console.log('Hey there 👋');
    console.log(this)
}

Person.hey();

// Prototypes
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// properties can also be set on prototype not just methods.

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); // This is false because species is only a property of the prototype not the jonas object.
// Person.prototype is actually not a prototype of person but a prototype of all the objects created through the person function.

console.log(jonas.__proto__);
// Object.prototype is at the top of the prototype chain.
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [8, 6, 6, 7, 7, 2, 7, 8, 5]; // new Array === []
console.log(arr.__proto__); // This displays all the array methods earlier discussed & despite what it displays, the array doesn't have all those methods but it inherits whatever method that is called from it's prototype.
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Taking arrays even further based on the knowledge gained so far 
Array.prototype.unique = function(){
   return [...new Set(this)];
}

console.log(arr.unique()); 

// N.B: All DOM elements are behind the scenes objects.
const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
// Solution
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

const car1 = new Car('BMW', 110);
const car2 = new Car('Mercedes', 100);
console.log(car1);

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
}

car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
console.log('Mercedes')
car2.accelerate();
car2.accelerate();
car2.brake();
car2.accelerate();
*/

// class expression
// const personCl = class {}

// Class declaration
class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods - they are added to the .prototype property so that all instances can have access to them.
  // Methods will be added to the .prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey, ${this.firstName}`);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  // For setting a property that already exists.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert (`${name} is not a full name!!`)
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new personCl('Jessica Davis', 1987);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age)

console.log(jessica.__proto__ === personCl.prototype);

// personCl.prototype.greet = function(){
//     console.log(`Hey, ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted. (They cannot be cannot be called before they are declared)
// 2. Classes are first class citizens. (They can passed into functions and be returned from functions because they are a special type of function themselves)
// 3. Classes are activated in strict mode. (Even if we don't call strict mode on out entire script classes would still be excecuted in strict mode.)

// Setters and Getters - This are values that get and set a property but on the outside they still look like normal functions.

const walter = new personCl('Walter White', 1965);

personCl.hey()

const account = {
    owner: 'Adeola',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// static methods are methods that are only available on certain constructors such as the parseFloat on Number.parseFloat(12), and the from on Array.from()