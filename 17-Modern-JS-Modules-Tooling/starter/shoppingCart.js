// Exporting module
console.log('Exporting module');

// Blocking Code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');  // Using top-level await can block code in really bad ways such as it does here. It can be really helpful but it also has to be used with great care.
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as qty}; // ← Named Export.

// Default Exports → They are used when we only want to export one thing per module.
export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}