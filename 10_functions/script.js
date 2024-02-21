"use strict";
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
///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
  Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be
either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option.
If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answerr
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // example: Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
*/
///////////////////////////////////////
// Lecture 6 - Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// by sorrounding with () the function, this will trick JS to use it as expression
// and at the end adding function call method will run the function
// this is IIFE
(function () {
  console.log("This will never run again");
})();

// Arrow IIFE
(() => console.log("This will ALSO never run again"))();
*/
///////////////////////////////////////'
// Lecture 7 - Closures
const secureBooking = function () {};
