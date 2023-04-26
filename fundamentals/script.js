/*
// Basic of functions
function logger() {
    console.log("My name is Joonas");
}

logger();


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  console.log(apples, oranges);
  return juice;
}

// this only shows 2 and 3 in console log
fruitProcessor(2, 3);

// we need to assign the return to a variable in order to get 'juice' clog
const appleJuice = fruitProcessor(3, 4);
console.log(appleJuice);
*/
// function declarations vs expressions lecture
// function decleration
/*
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
  return 2037 - birthYear; // simplified
}

const age1 = calcAge1(1991);

// function expression
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1991);
console.log(age1, age2);
*/
/*
///////////////////////////////////////
// Arrow function
const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

// another example
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Joonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
// Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  console.log(apples, oranges);
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
// Functions review
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Joonas"));
console.log(yearsUntilRetirement(1970, "Bob"));
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, 
which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team). A team ONLY wins if it has at least DOUBLE the average score of the
other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters
('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory
points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(44, 23, 71));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No winner`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);
*/
/*
///////////////////////////////////////
// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const fernos = ["Fernos", "DeLaVega", 2037 - 1991, "SystemEngineer", friends];
console.log(fernos);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years[1]));
// or
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

// making new array to assign values from age
const ages = [age1, age2, age3];
console.log(ages);
*/
/*
///////////////////////////////////////
// Arrays part 2
// Push for adding an array item at the end of the list
const friends = ["Michael", "Steven", "Peter"];
// push returns with the nmbr of elements in array
const newLength = friends.push("David");
console.log(friends);
console.log(newLength);

// Unshift to add elements at the beggining of an array
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // removes the last element
const popped = friends.pop();
// returns the element that has been removed
console.log(popped);
console.log(friends);

friends.shift(); // removes the first element
console.log(friends);

console.log(friends.indexOf("Steven"));

// ES6 method, includes
console.log(friends.includes("Steven"));
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and 
returns the corresponding tip, calculated based on the rules above 
(you can check out the code from first tip calculator challenge if you 
need to). Use the function type you like the most. 
Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the 
test data below.
3. Create an array 'tips' containing the tip value for each bill, 
calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the 
bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and 
that value can actually be the returned value of a function! 
So you can just call a function as array values (so don't store 
the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀


// step 1
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));

// step 2
const bills = [125, 555, 44];
console.log(calcTip(bills[0]));

// step 3
const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);
// or, faster and better way
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const tips = [tip1, tip2, tip3]; // used for the first tips(1,2,3)
console.log(tips);

// Bonus
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
///////////////////////////////////////
// Objects
/*
// Array example
const fernosArray = [
  "Fernos",
  "Koskinen",
  2037 - 1991,
  "systems engineer",
  ["Michael", "Peter", "Steven"],
];
// object literal syntax
const fernos = {
  firstName: "Fernos",
  lastName: "Koskinen",
  age: 2037 - 1991,
  profession: "systems engineer",
  friends: ["Michael", "Peter", "Steven"],
}; // We can define inside object with properties
// Array's are used more for ordered data, objects for unstructured data
console.log(fernos);

// Dot notation, needs to be the exact property name
console.log(fernos.lastName);
// Brackets notation
console.log(fernos["lastName"]);

// using different way brackets notation
const nameKey = "Name";
console.log(fernos["first" + nameKey]);
console.log(fernos["last" + nameKey]);

// Using bracket notation for prompt to get the property
const interestedIn = prompt(
  "What do you want to know about Fernos? Choose between firstName, lastName, age, profession and friends"
);
if (fernos[interestedIn]) {
  console.log(fernos[interestedIn]);
} else {
  console.log("Wrong request! Choose again..");
}

// to add property in an object, dot and brackets way
fernos.location = "Helsinki";
fernos["favFood"] = "Fried rice";
console.log(fernos);

// Challenge
// 'Fernos has 3 friends, and his best friend is called Michael'
console.log(
  fernos.firstName +
    " has " +
    fernos.friends.length +
    " friends, and his best friend is called " +
    fernos.friends[0]
);
*/
///////////////////////////////////////
// Objects part 2
/*
const fernos = {
  firstName: "Fernos",
  lastName: "Koskinen",
  birthYear: 1991,
  profession: "systems engineer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //  We can only use expression inside object, not decleration
  //  calcAge: function () {
  //  return 2037 - this.age;
  //   },
  //  Not ideal way of making a function, preferably THIS method
  //  calcAge: function (birthYear) {
  //  return 2037 - birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-old ${
      this.profession
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
console.log(fernos.calcAge());
console.log(fernos.age);
console.log(fernos.age);
console.log(fernos.age);

// Challenge
// "Fernos is a 46-year-old systems engineer, and he has a/not a driver's license"

console.log(fernos.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name,mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


// Mark object
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  // step 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
// John object
const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  // step 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI(${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI(${john.bmi})!`
  );
} else {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI(${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI(${mark.bmi})!`
  );
}
///////////////////////////////////////
// Loops //

// For-loop
for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition 🏋️");
}
*/
/*
// Looping through an Array
const fernosArray = [
  "Fernos",
  "Koskinen",
  2037 - 1991,
  "systems engineer",
  ["Michael", "Peter", "Steven"],
];
// Create a new array for typeof
const types = [];

for (let i = 0; i < fernosArray.length; i++) {
  console.log(fernosArray[i], typeof fernosArray[i]);

  // To add this for loops information into a new array
  // (Another way to create an array) types[i] = typeof fernosArray[i];
  types.push(typeof fernosArray[i]);
}

console.log(types);
// Another example of arrays to combine
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue & Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < fernosArray.length; i++) {
  if (typeof fernosArray[i] !== "string") continue;
  console.log(fernosArray[i], typeof fernosArray[i]);
}

console.log("--- Break with number ---");
for (let i = 0; i < fernosArray.length; i++) {
  if (typeof fernosArray[i] === "number") break;
  console.log(fernosArray[i], typeof fernosArray[i]);
}
*/
///////////////////////////////////////
// Looping part 2
/*
const fernosArray = [
  "Fernos",
  "Koskinen",
  2037 - 1991,
  "systems engineer",
  ["Michael", "Peter", "Steven"],
];
// Looping backwards
for (let i = fernosArray.length - 1; i >= 0; i--) {
  console.log(i, fernosArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting excercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️`);
  }
}
// While-loop
// rep needs to be defined outside while-loop
console.log("-----------------------");
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep} 🏋️`);
  rep++;
}
// To create a random dice to have from 1-6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// Step 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Step 2
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  console.log(tips[i]);

  totals.push(bills[i] + tips[i]);
}
console.log("------------- Totals -------------");
console.log(totals);

console.log("------------- BONUS -------------");

const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    //   sum = arr[i] + sum;
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
