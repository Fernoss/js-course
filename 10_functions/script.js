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
// Higher order function, lecture 3

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