'use strict';
// lecture 1
/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199) {
    // ES5, old way -> ES6 default values to arguments straight away
    // numPassengers =  numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2,);
createBooking('LH123', 2, 200);
*/
// lecture 2
/*
const flight = 'LH234';
const fernoss = {
    name: 'Fernoss Koskinen',
    passport: 234567890
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 234567890) {
        alert('Checked in');
    }
    else {
        alert('Wrong passport!');
    }
}

checkIn(flight, fernoss);
console.log(flight);
console.log(fernoss);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

// Creates wrong passport = newPassport function changes passportNum.
newPassport(fernoss);
checkIn(flight, fernoss);
*/
////////////////////////////////////////////////////////////////////
// Higher order function, lecture 3
/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-orfer function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord)
console.log(' ');
transformer('JavaScript is the best!', oneWord)

// JS uses callback all the time
const highFive = function () {
    console.log('👋');
};

document.body.addEventListener('click', highFive);
*/
////////////////////////////////////////////////////////////////////
// lecture 4
// traditional way (arrow way on the next)
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// function is value in JS
// const greeterHey = greet('Hey');
// greeterHey('Joonas');
// greeterHey('Jonas');

// greet('Hello')('Joonas');
// Challenge arrow
// const greetArr = greeting =>
//     name => console.log(`${greeting} ${name}`);

// const greeter = greetArr('Hello');
// greeter('Joonas');
////////////////////////////////////////////////////////////////////
/*
// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {} - old way
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };

lufthansa.book(239, 'Fernos Santos');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  
  // Does NOT work
  // book(23, 'Sarah Williams');
  
  // Call method
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);

  book.call(lufthansa, 41, 'Mary Cooper')
  console.log(lufthansa);

  // Apply method - not used that much nowadays
  const flightData = [583, 'George Cooper'];
  book.apply(eurowings, flightData);
  console.log(eurowings);

  //spreading the array for call method
  book.call(lufthansa, ...flightData);
  console.log(lufthansa);
  */
 ////////////////////////////////////////////////////////////////////
 // Lecture 5, Bind method
// Converting this -> book.call(eurowings, 23, 'Sarah Williams');
// to bind method
/*
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

// also can bind with a parameter set in place
const bookEW23 = book.bind(eurowings, 23);

bookEW(23, 'Sarah Williams');
bookEW23('Fernoss Ferrero');

// with eventListners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++
    console.log(this.planes);
};
// lufthansa.buyPlane();

document
.querySelector('.buy')
.addEventListener('click', lufthansa
.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));

// null for 'this.' - setting taxrate parameter 
const addVAT = addTax.bind(null, 0.24);
// addVat = value => value + value * 0.24;
console.log(addVAT(100));
*/
