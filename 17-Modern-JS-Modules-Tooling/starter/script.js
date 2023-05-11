// Importing module
// import {addToCart, totalPrice as price, qty} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qty);
console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, qty} from './shoppingCart.js'; // Named and default exports can be mixed. Although in practice named and default exports shouldn't be mixed to avoid complexity.
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// console.log(cart);

//N.B: The preferred style amongst developers is to use one default export per module.

//////////////////////////////////////////////////////////
// Top-Level await (ES 2022)
// We can now use the await keyword outside an async function but only in modules not scripts.
// In the script tag within the HTML, the type must be set to 'module' for this to work.

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

/*
const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
////////////////////////////////////////
// The Module Pattern
const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    }

    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    }

    return {
        addToCart, 
        cart,
        totalPrice,
        totalQuantity,
    }
})()

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

////////////////////////////////////////
// Common JS Modules - He actually said the code in this section was not for me to write but I wrote it anyways
// Export
// export.addToCart = function(product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// }

// Import
// const {addToCart} = require('./shoppingCart');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find.js';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime.js';

// I don't know why Jonas is saying this at the end but he said things might not work the same so we should make sure we install the exact versions that he has in his own codes since I am watching this video two to three years from when it was created.
// But I am not that desperate to make things work right now, there is only one error with the resolved promise so that should be alright. I would just leave it like this.

// So I just figured out what was wrong with my code now everything works beautifully. ✨😁
