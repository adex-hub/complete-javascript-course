'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Advanced Object Literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} would be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output)
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
// Solution after viewing the coding challenge video.
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()){
    const [first, second] = row.trim().toLowerCase().split('_');

    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
})
*/

// console.log(text);

/*
// My solution before viewing the coding challenge video.
const camelCaseConvert = function (snake) {
  const snakeCase = snake.toLowerCase().trim();
  let [firstWord, lastWord] = snakeCase.split('_');
  lastWord = lastWord.replace(lastWord[0], lastWord[0].toUpperCase());
  console.log(firstWord + lastWord);
};

// camelCaseConvert('delayed_departure');
// camelCaseConvert('  calculate_AGE');

// Second Part.
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const eachText = text.split('\n');
  for (const each of eachText) camelCaseConvert(each);
});
*/

/*
// Working with strings - Part 3.////////////////////////
console.log('a+very+nice+string'.split('+'));
console.log('baker boogeymann'.split(' '));

const [firstName, lastName] = 'Baker boogeymann'.split(' ');
// console.log(firstName, lastName.toUpperCase());

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//MISSION: To captitalize any name.
const capitalizeName = function (name){
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann davis');
capitalizeName('harrison ford');
capitalizeName('henry hathaway');
capitalizeName('adeola badero');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Adeola'.padStart(25, '+').padEnd(30, '+'));


const maskCreditCard = function (number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(183485359835631));
console.log(maskCreditCard(161835150265151));
console.log(maskCreditCard(551541561853165));

//Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes waiting in line. ${'✈️'.repeat(n)}`)
}

planesInLine(3);
planesInLine(5);
planesInLine(8);
*/

/*
// Working with Strings - Part 2 ////////////////////////

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in name
const passenger = 'alFreNDo';
const passengerLower = passenger.toLowerCase();

// const passengerCapitalized = passengerLower.slice(0, 1).toUpperCase();
// console.log(`${passengerCapitalized}${passengerLower.slice(1)}`);

const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io';

const normalizedEmail = loginEmail.toLowerCase().trim();
// FYI - trimStart() and trimEnd() methods also exist since ES 2019.

console.log(normalizedEmail);

//replacing 
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 3, Boarding door 3';
const announcementNew = announcement.replaceAll('door', 'gate');
console.log(announcementNew);

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('neo'));
console.log(plane.includes('nel'));
console.log(plane.startsWith('A'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the NEW Airbus family');
}

// Practice Exercise - When we recieve input from a user the first step is to convert it to lowercase as that makes it easy for us to compare it to something.

const checkBaggage = function (items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome Aboard!');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
// Working with strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log('B737'.length);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // This does not change the value of the original string as strings cannot be mutated! They are primitive.
console.log(airline.slice(4, 7)); // The closing index of the slice string isn't included in the output!

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😔')
  else console.log('You got lucky 🍀')
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// One might reason that since strings are primitive data types, methods shouldn't work on them but it only works due to the concept known as JavaScript Boxing - Research this if you need to know more 😉.
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
//Solution
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const eventsSet = new Set([...gameEvents.values()]);
const events = [...eventsSet];
// console.log(events);

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4.
for (const [minute, event] of gameEvents) {
  const whatHalf = minute > 45 ? '[SECOND HALF]' : '[FIRST HALF]';
  console.log(`${whatHalf} ${minute}: ${event}`);
}
*/

/*
////////////////////////////////////// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3], 
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
])

console.log(question);

// Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question){
  if(typeof key === 'number'){
    console.log( `Answer ${key}: ${value}`);  
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer);

//My way.
// answer === 3 ? console.log(question.get(true)) : console.log(question.get(false));

//Another way of getting the answer (through jonas schmedtmann method)
// answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert Map to an array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/*
//////////////////////////////////Maps: Fundamentals
// Best possible way to create a map; It is stored in key, value pairs.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Lisbon, Portugal');
console.log(rest.set(2, 'Firenze, Italy'));
//

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(')

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear()

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);
*/

/*
///////////////////////////////////////////Sets
const orderSet = new Set([
  'Pizza', 'Pizza', 'Risotto', 'Risotto', 'Spaghetti',
])

console.log(orderSet);

console.log(new Set('Adeola'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
console.log(orderSet.add('Garlic Bread'));
orderSet.delete('Spaghetti');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Manager', 'Waiter', 'Chef', 'Waiter', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set('Adeniyi-Omotayo').size);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const scored = game.scored;
// console.log(scored)

for (const [i, el] of scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

//2.
const oddValues = Object.values(game.odds);
// console.log(oddValues);
let sum = 0;

for (const value of oddValues) {
  sum += value;
}

const avgOdds = sum / oddValues.length;
console.log(avgOdds);

//3.
const oddEntries = Object.entries(game.odds);
console.log(oddEntries);


      // Odd of victory Bayern Munich: 1.33
      // Odd of draw: 3.25
      // Odd of victory Borrussia Dortmund: 6.5

for(const [team, odd] of oddEntries){
  const teamStr = team === 'x'? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

/*
//Looping Objects////////////////////////////
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days a week: `;

for (const day of Object.keys(openingHours)){
  openStr += `${day}, `;
}

console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// Optional Chaining!!!!!!!! - It is used often with the nullish coallescing operator.
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);


// console.log(restaurant.openingHours.mon.open);

//WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed!';
  console.log(`On ${day}, we open on ${open}`);

  // open ?? console.log(`On ${day}, we are closed!`)
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderBolognia?.(0, 1) ?? 'Method does not exist!');


//Arrays
const users = [{name: 'Adeola', email: 'admin@adeola.io'}];
console.log(users[0]?.name);
console.log(users[0]?.phoneNumber ?? 'Property does not exist');
*/

/*
// Looping arrays the for ... of loop ///////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const food of menu) console.log(food);

// To access the index of each value.
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `)
} 

// console.log([...menu.entries()]);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// Solution to Coding Challenge 1 - Data required is in Coding Challenge number 2;

//1.
const [players1, players2] = game.players;
// console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5.
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

//6. 
const printGoals = function(...players){
  console.log(`${players.length} goals were scored!`);
}

//7.
printGoals(...game.scored);
// team1>team2 ? console.log('Team 1 is more likely to win') : console.log('Team 2 is more likely to win!')

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*
// OR, Nullish and AND assignment operator.
const rest1 = {
  name: 'Capri', 
  numGuests: 20, 
}
const rest2 = {
  name: 'La Piazza', 
  owner: 'Giovanni Rossi', 
}

// OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
//////////////////////////
//  The nullish coallescing operator
// restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);


//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

//////////////////////////////////////////
// Short circuiting (&& and ||)
/*
console.log('-----OR-----');
// Logical operators can use any data type, return any data type, short-circuiting.
// In simple terms the OR short circuiting works as such -- it goes on until it finds a true value then returns it.
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');
// The AND operator goes on till it finds a falsy value then returns it. If it cannot find a falsy value it returns the last truthy value. 
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Adeola');

//Practical Example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

///////////////////////////////////////////////////
// REST Pattern and operators.
/*
// 1. Destructuring
// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2)
add(8, 2, 5)

const x = [44, 73, 26]
add(...x)

restaurant.orderPizza('mushrooms', 'brocolli', 'cheese', 'carrot');
/*

/*
The Spread Operator///////////////////////
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// The spread operator works on iterables: arrays, maps, sets, NOT OBJECTS (But it now works on objects since ES 2018)
const str = 'Adeola';
const letters = [...str, ' ', '.A'];
console.log(letters);
console.log(...str);

//Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe De Carlo'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
restaurant.name = 'Ristorante De La Viv';
console.log(restaurantCopy.name);
console.log(restaurant.name)
*/

/*
// Object Destructuring.//////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'Lagos', 
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Bola Ahmed Tinubu Road, 34',
  starterIndex: 1,
})

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default value
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

let obj = {
  a: 23, 
  b: 9,
  c: 10,
};

({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

// // Destructuring Arrays.
// let [main, , secondary] = restaurant.categories;

// Regular method of switching the value of main and secondary.
// const temp = main;
// main = secondary;
// secondary = temp;

// // Method of switching the values of main and secondary using array.
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieve two values from a function.
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // let [firstNum, ,secondArr] = nested;
// // console.log(firstNum, secondArr);

// let [i, ,[j, k]] = nested;
// console.log(i, j, k);

// // Default values (useful when unpacking data from an API)
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
