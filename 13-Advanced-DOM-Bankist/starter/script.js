'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

// Find out why this works again -- maybe after class.

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  // This more modern way of scrolling only works in modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('LINK');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// })

// Adding Event Listeners using Event propagation instead of adding an event listener to each element.
// 1. Add event listenere to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*
// Selecting Elements
console.log(document.documentElement); // This selects the entire html document.
console.log(document.head); // This selects just the html head - This part isn't visible to the user.
console.log(document.body); // This selects the body of the html document - The visible part of the webpage.

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // This returns an HTML Collection unlike the querySelectorAll which returns a NodeList.
console.log(allButtons);

// N.B: Html collections update themselves automatically but a NodeList doesn't.

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML - If you need to understand how this works again go to the bankist application.

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie"> Got it! </button>';

// header.prepend(message); // This adds message as the first child of the DOM element.
header.append(message); // This adds message as the last child of the DOM element.
// header.append(message.cloneNode(true)); // This clones the element that we need to add. It places it at the top and the bottom but it's not often needed in real world applications.

// N.B: A DOM element is unique and can only exist at one place at a time. That is why 'message' didn't appear in two places (at the top and bottom). .prepend(message) was used to create the message element and set it at the top while .append(message) moved it to the bottom. Hence, prepend and append can be used to move elements around in the DOM.

// header.before(message); // This inserts 'message' before the header element as siblings.
// header.after(message); // This inserts 'message' after the header element as siblings.

// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function(){
  // message.remove() -- Newer way of removing an element.;
  message.parentElement.removeChild(message); // Older way of removing an element.
})

// N.B: Moving around the DOM like this and selecting elements is called DOM traversing.
*/

/*
// Styles - REFERENCE LECTURE
message.style.backgroundColor = '#37383d';
message.style.width = '120%' // The units are important.

console.log(message.style.color);
console.log(message.style.backgroundColor); // This method of setting styles that we set, only works for inline styling that we have previously set in our JS file, doesn't work for styles that have been set in CSS which is why the line of code above logged and empty string.

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

  // Changing a CSS Variable color
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes - such as: src, href, (even class & id too) etc.
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // Because designer is an unofficial attribute, This wouldn't work. But the line of code below this works for both official and unofficial attributes although in different ways sometimes.
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute
console.log(link.getAttribute('href')); // relative (As written in HTML).

// Data Attributes
console.log(logo.dataset.versionNumber) // All data attributes 'data-...' are stored in the dataset object.

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes like in arrays.

// Don't Use
logo.className = 'jonas';
*/

/*
// Types of Events and Event Handlers. - REFERENCE LECTURE
// N.B: Any important activity that takes place on a webpage is an event (such as the user going into fullscreen mode).

const h1 = document.querySelector('h1');

const alertH1 = function(e) {
  alert('addEventListener: Great! You are reading the heading :D');
}

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// }
*/

/*
// Event Propagation in Practice - REFERENCE LECTURE
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // The this keyword points to the element that the EventListener is attached to.
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop Propagation
  // e.stopPropagation(); // In General, it isn't really a good idea to stop propagation in events, but it can be really useful in terms of fixing problems in really complex applications.
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/

/*
// DOM Traversing - REFERENCE LECTURE
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Query Selector and closest() are like opposites because querySelector finds children no matter how deep in the DOM tree while closest() finds parents no matter how far up in the DOM tree.

// Going sideways: selecting siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

  // For nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// If we need all the siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
})
*/
