'use strict';

// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never do this
//     // this.calcAge = function(){
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas)

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// Person.hey = function() {
//     console.log('Hey there 👋');
//     console.log(this)
// }

// Person.hey();

// // Prototypes
// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear);
// }

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // properties can also be set on prototype not just methods.

// Person.prototype.species = 'Homo sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species')); // This is false because species is only a property of the prototype not the jonas object.
// // Person.prototype is actually not a prototype of person but a prototype of all the objects created through the person function.

// console.log(jonas.__proto__);
// // Object.prototype is at the top of the prototype chain.
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [8, 6, 6, 7, 7, 2, 7, 8, 5]; // new Array === []
// console.log(arr.__proto__); // This displays all the array methods earlier discussed & despite what it displays, the array doesn't have all those methods but it inherits whatever method that is called from it's prototype.
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// // Taking arrays even further based on the knowledge gained so far
// Array.prototype.unique = function(){
//    return [...new Set(this)];
// }

// console.log(arr.unique());

// // N.B: All DOM elements are behind the scenes objects.
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

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

//////////////////////////////////
// ES 6 Classes
// class expression
// const personCl = class {}

// // Class declaration
// class personCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance Methods - they are added to the .prototype property so that all instances can have access to them.
//   // Methods will be added to the .prototype property.
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey, ${this.firstName}`);
//   }

//   get age(){
//     return 2037 - this.birthYear;
//   }

//   // For setting a property that already exists.
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert (`${name} is not a full name!!`)
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const jessica = new personCl('Jessica Davis', 1987);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age)

// console.log(jessica.__proto__ === personCl.prototype);

// // personCl.prototype.greet = function(){
// //     console.log(`Hey, ${this.firstName}`);
// // }

// jessica.greet();

// 1. Classes are NOT hoisted. (They cannot be cannot be called before they are declared)
// 2. Classes are first class citizens. (They can passed into functions and be returned from functions because they are a special type of function themselves)
// 3. Classes are activated in strict mode. (Even if we don't call strict mode on out entire script classes would still be excecuted in strict mode.)

// Setters and Getters - This are values that get and set a property but on the outside they still look like normal functions.

// const walter = new personCl('Walter White', 1965);

// personCl.hey()

/*
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
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
// Solution
class CarCl{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  
  brake(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  get speedUS(){
    return this.speed / 1.6;
  }

  set speedUS(speed){
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
*/

/*
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear);
  this.course = course;
}

// Linking Prototypes -- We want the student to inherit from "Person" but we don't want them to be the exact same thing.
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
// My Solution -- Using constructor function to implement

const EV = function(make, speed, charge){
  this.make = make;
  this.speed = speed;
  this.charge = charge;
}

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(speed, charge){
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`);
}

const electricCar = function(make, speed, charge) {
  EV.call(this, make, speed, charge);
}

// I don't know if this is necessary just yet.
electricCar.prototype = Object.create(EV.prototype);

electricCar.prototype.constructor = electricCar;

electricCar.prototype.info = function(){
  console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`);
}

const tesla = new electricCar('Tesla', 120, 23);
console.log(tesla);
tesla.info();
tesla.accelerate();
// tesla.chargeBattery(90);
// console.log(tesla)
*/

/////////////////////////////////////////////////
// Inheritance between "Classes": ES6 Classes

/*
class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
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

class StudentCl extends personCl {
  constructor(fullName, birthYear, course){
    // Always needs to happen first. ------- Super function is the constructor class of the parent function.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge(){
    console.log(`I'm ${2037 - this.birthYear} years old but I feel like ${2037 - this.birthYear + 10}`)
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/*
///////////////////////////////////////////
// Inheritance between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, "Computer Science");
jay.introduce();
jay.calcAge();

// NB: I think this is the best method that I have ever learnt because no faking classes we are just linking objects and that's quite beautiful. Might watch vid 22 again.
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static method)

// Field can be thought of as a property that would be on all instances.

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property -- this is based on convention it is not actual protection.
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // 3) Public methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#pin);
// According to Jonas, instead of interacting with the Movements array like in the way I did it from ln 489, It is better to create methods that would handle this for me. -- As it would help me avoid bugs as my application grows larger.

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  changeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .changeBattery(90)
  .accelerate();

  console.log(rivian.speedUS);