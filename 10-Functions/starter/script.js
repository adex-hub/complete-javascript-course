'use strict';
/*
// Default Parameters
const bookings = [];

const createBooking = function (flightNum, passengerNum = 1, price = 199 * passengerNum) {

    const booking = {
        flightNum,
        passengerNum,
        price,
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
// How passing arguments works: Value vs. Reference./////////
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann', 
    passport: 48645196845466
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 48645196845466) {
        alert('Checked In')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same thing as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
// Functions accepting other functions. ///////////////
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order functions
const transformer = function (str, fn){
    console.log(`Original string: ${str}`);

    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// Transformer is the higher order function because it takes in another function.
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// JS uses callbacks all the time
const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Steve'].forEach(high5);
*/

/*
// Functions returning Functions
const greet = function (greeting){
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Adeola');
greeterHey('Cynthia');

greet('Hello')('Seun');

// Challenge
const greet2 = (greeting2) => (name2) => console.log(`${greeting2} ${name2}`);

greet2('Hi')('Tinuke');
*/

/*
// Bind, call and apply methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(246, 'Alice Benjamin');
lufthansa.book(237, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT Work
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Snipes');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method - not that used in Modern JavaScript because...
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// This line of code can do the exact same thing.
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Benjamin Odumala');
bookEW23('Thomas Blakely');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application -- This means you can preset functions

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addTax = (rate, value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(50));

const addTaxRate = function (rate){
    return function(value){
        console.log(value + value * rate);
    }
}

const addVAT2 = addTaxRate(0.23);
addVAT2(100);
addVAT2(50);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
// Coding challenge 4 solutions
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option Number)`
      )
    );
    console.log(answer);

    // Register Answers
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
// console.log(poll.answers);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers:  [5, 2, 3]}, 'string');
poll.displayResults.call({answers:  [1, 5, 3, 9, 6, 1]}, 'string');

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/

/*
// IIFE (Immediately invoked function expressions) - Would be very useful in the future for async/await.
const runOnce = function () {
  console.log('This would never run again');
}

runOnce();  // This could actually be run again as many times as we want.

//IIFE
(function(){
  console.log('This would never run again');
}())

// ...With arrow functions according to the course.
(() => console.log('This would ALSO never run again'))();
// For some reason the one with arrow functions doesn't work.
*/

/*
// CLOSURES - Many developers fail to fully understand this so I'd pay full attention.
// Closures aren't really a feature of JavaScript they just happen in certain situations
const secureBooking = function() {
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();

// A Closure makes the function remember all the code that existed in the function's birth place.
console.dir(booker);

// I need to fully understand how closures work so subsequently we would be looking at a few examples - But right now I have an idea 💡;
// To be a confident JS Developer I need to understand how everything in my code works including closures.
*/

/*
//EXAMPLES ON CLOSURES.
// Example 1
let f;

const g = function(){
  const a = 23;

  f = function(){
    console.log(a * 2);
  }
}


const h = function(){
  const b = 777;
  f = function(){
    console.log(b*2);
  }
}
g();
f();
console.dir(f)

//Re-Assigning the f function.
h();
f();
console.dir(f)

// Example 2
const boardPassengers = function(n, wait){
  const perGroup = n/3;
  
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We would start boarding in ${wait} seconds`);
}

boardPassengers(100, 3);

// The closure has priority over the scope chain.
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function(){
    header.style.color = 'blue';
  })
})();