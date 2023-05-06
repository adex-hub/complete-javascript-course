'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages[Object.keys(data.languages)[0]]
    }</p>
    <p class="country__row"><span>💰</span>${
      data.currencies[Object.keys(data.currencies)[0]].name
    }</p>
    </div>
    </article> 
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// Our first AJAX Call: XMLHttpRequest

// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send(); // this line sends off a request and that request fetches the data in the background.
//     // console.log(request.responseText);

//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
//             </div>
//         </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     })
// }

// getCountryData('nigeria');
// getCountryData('seychelles');
// getCountryData('Sao Tome and Principe');

///////////////////////////////////////////////////////
// Welcome to Callback Hell

/*
const getCountryAndNeighbor = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send(); // this line sends off a request and that request fetches the data in the background.
    // console.log(request.responseText);
    
    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country
        renderCountry(data)

        // Get neighbor country
        const neighbour = data.borders?.[0];
        if(!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function(){
            const [data2]  = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        })

    })
}

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('nigeria');

setTimeout(() => {
    console.log('1 second has passed');
    setTimeout(() => {
        console.log('2 seconds has passed')
        setTimeout(() => {
            console.log('3 seconds has passed')
            setTimeout(() => {
                console.log('4 seconds has passed')
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// NB: Callback hell is when we have a lot of nested callbacks in order to excecute asynchronous tasks in sequence. It is pretty easy to identify by its triangular shape and it makes code more difficult to understand which makes the code a bad code.
// There is a way of escaping callback hell though, which is through Promises.
*/

// const request = fetch('https://restcountries.com/v3.1/name/nigeria');
// console.log(request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0])
//     });
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dafgsgaeg';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('sdfadsfhoawer');

/*
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again`);
      console.log(err.message)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');


// Fix the fact that the function is not throwing the error that I want it to.
// Attempt the coding challenge.
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
// Coding challenge solution
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&format=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.address.city}, ${data.address.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.address.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(error.message));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// Personal thoughts on this coding challenge: I think you never know how good you are at something until you try it, that was the case with this coding challenge I was able to complete part 1 without jonas' help and for me that's crazy.
*/

/*
/////////////////////////////////////
// The event loop in practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(response => console.log(response));

Promise.resolve('Resolved promise 2').then(res => {
  for(let i = 0; i < 1000000000; i++){};
  console.log(res);
})

console.log('Test end');
*/

/*
//////////////////////////////////////////////////////
// Building a simple promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮')
  setTimeout(function(){
    
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 😢'));
    }
  }, 2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// Promises are built to wrap old callback based functions into promises. And this process is called promisifying.

// Promisfying setTimeout function
const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  })
}

wait(1)
.then(() => {
  console.log('1 second has passed');
  return wait(1);
})
.then(() => {
  console.log('2 second has passed');
  return wait(1);
})
.then(() => {
  console.log('3 second has passed');
  return wait(1);
})
.then(() => console.log('4 seconds has passed'));

// setTimeout(() => {
//   console.log('1 second has passed');
//   setTimeout(() => {
//       console.log('2 seconds has passed')
//       setTimeout(() => {
//           console.log('3 seconds has passed')
//           setTimeout(() => {
//               console.log('4 seconds has passed')
//           }, 1000)
//       }, 1000)
//   }, 1000)
// }, 1000)

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

//  // Promisfying the Geolocation API.
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve (position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&format=json`
//       );
//     })

//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.address.county}, ${data.address.country}`);
//       console.log(data);

//       return fetch(
//         `https://restcountries.com/v3.1/name/${data.address.country}`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.error(error.message));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
// Solution.
const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  })
}

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath; //For now.

    img.addEventListener('load', function(){
      imgContainer.append(img);
      resolve(img);
    })

    img.addEventListener('error', function(){
      reject(new Error('Image not found'));
    })
  })
}
let currentImg;
createImage('img/img-1.jpg').then(img => {
  currentImg = img;
  console.log('Image 1 loaded');
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-2.jpg');
})
.then(img => {
  currentImg = img;
  console.log('Image 2 loaded');
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none';
})
.catch(err => console.error(err));
*/

// fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(country)); this is the same as ...
// the line of code above is the same as...
// const theCountry = await fetch(`https://restcountries.com/v3.1/name/${country}`);
// console.log(theCountry);

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

///////////////////////////////////////////////
// Error Handling with try...catch
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);
    // console.log(data[0]);

    return `You are in ${dataGeo.address.county}, ${dataGeo.address.country}`;
  } catch (err) {
    console.error(`${err} /🔥`);
    renderError(`🔥 ${err.message}`);

    // Reject promise coming from async function
    throw err;
  }
};

///////////////////////////////////////////////
// RETURNING VALUES FROM ASYNC FUNCTIONS
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 🔥`))
//   .finally(() => console.log(`3: Finished getting location`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 🔥`);
  }
  console.log(`3: Finished getting location`);
})();

// NB: async/await is only about consuming promises.

// try{
//   let y = 32;
//   const x = 7;
//   x = 44;
// } catch(err){
//   alert(err.message)
// }

//////////////////////////////////////////////////////
// Running Promises in Parallel (keep this technique in mind cause your users will thank you. [Since it reduces loading time.])
const get3Capitals = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);
    //  PROMISE.ALL COMBINATOR ↓
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Capitals('portugal', 'canada', 'armenia');
*/

/*
///////////////////////////////////////////////
// Other promise combinators: race, allSettled and any

// Promise.race - the array element with the least amount of loading time wins the race.
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    getJSON(`https://restcountries.com/v3.1/name/france`),
  ]);

  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/france`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// N.B: Promise.race and Promise.all are by far the two most important promises.

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//N.B: The difference between Promise.all() and Promise.allSettled() is that the former
//     short circuits if one of the promises rejects while the latter displays all the
//     promises whether resolved or rejected.

// Promise.any [ES 2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
// Promise.any takes in an array of promises and returns the first fulfilled promise but ignores the rejected promises.
/*

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// PART 1
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not Found'));
    });
  });
};

const loadNPause = async function () {
  try {
    // Image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Image 1
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    // const imgArray = await Promise.all(imgArr);
    // const imgs = imgArray.map(img => createImage(img));
    //                          ↓
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
