'use strict';
/////////////////////////////////////////
// Scope
/*
function calcAge(birthYear) {
  // 1. scope
  const age = 2037 - birthYear;
  // 2. scope
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    // Block scope, const and let are only block scoped
    // var is function scoped
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // const and let not
    // console.log(str);
    // var works here too
    console.log(millenial);
    // can't call function add here, that is defined in if block
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

// Global variable (Global scope)
const firstName = 'Joonas';
calcAge(1991);
*/
/////////////////////////////////////////
/*
// Hoisting
// console.log(me);
// // Temporal Dead Zone
// console.log(job);
// console.log(year);

// var me = 'Joonas';
// let job = 'juniordev';
// const year = 1991;

//Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// in console, use window -> x is defined in global window property, const and let is not
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
/////////////////////////////////////////
/*
// This keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const fernos = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
fernos.calcAge();

const matilda = {
  year: 2017,
};
// Method borrowing
matilda.calcAge = fernos.calcAge;
matilda.calcAge();

const f = fernos.calcAge;
*/
/////////////////////////////////////////
// Regular functions vs Arrow functions
/*
const fernos = {
  firstName: 'Fernos',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // that or self
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
fernos.greet();
fernos.calcAge();

// Arguments keyword, only exists in regular fx = declaration and expression
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
// Can have more than two required arguments, check console log
addExpr(2, 5, 8, 12);

// Arrow fx will not get arguments keyword
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
/////////////////////////////////////////
// Primitives vs Objects, refrence values
/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

// Objects example
const me = {
  name: 'Joonas',
  age: 30,
};

// Creating new object that copies me-object
// Const only works for primitives, not HEAP values
const friend = me;
friend.age = 27;

// 'Me' object inherits age from friend
console.log('Friend:', friend);
console.log('Me', me);
*/
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Objects | refrence types, HEAP
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
// Const doesn't affect the memory refrence for the heap, this is why you can change values
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);
// BUT, const will not let you assign new object, for example {}. Changes value in STACK
// marriedJessica = {};

// To copy an object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// o.assign = shallow copy. If there were object within an object, copies only in first level
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);

// Adding for family more values, proving o.assing shallow copy. Both will have 4 members
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);
