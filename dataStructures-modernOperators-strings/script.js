'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
///////////////////////////////////////////////////////
// Enhanced object literals

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literal implementation
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order(starterIndex, mainIndex) {
    // = order: function() - without ES6, Enhanced object literal
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // fx with object argument
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  // Destructuring straight away in arguments for OBJECTS + adding default values in arguments
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///////////////////////////////////////////////////////
// SETS
// Elements are unique, order is irrelevant
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //Set(3) ('Pasta', 'Pizza', 'Risotto')

console.log(new Set('Fernos')); //Set(6) ('F','e','r','n','o','s')

console.log(ordersSet.size); // 3;

console.log(ordersSet.has('Pizza')); // true;
console.log(ordersSet.has('Wings')); // false;

ordersSet.add('Garlic Bread'); // to add
ordersSet.delete('Risotto'); // to delete
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example use of SETS
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff); // We can create an array from the Set
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

///////////////////////////////////////////////////////
/*
// Looping objects: keys(property names), values and entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // (3) ['thu', 'fri', 'sat']
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values); // open: 12, close: 22 etc.

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// for (const x of entries) {
//   console.log(x); // gives objects inside openingHours
// }

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
///////////////////////////////////////////////////////
/*
// Optional chaining (?.) ES 2020
// WITH optional chaining
// ? symbol is assigned and checks if properties exist before ? and then continues. ? returns undefined if doesn't exist.
console.log(restaurant.openingHours.mon?.open);
// Multiple, check if oH exists, then checks mon. If oH doesn't exist, breaks
console.log(restaurant.openingHours?.mon?.open);
// WITHOUT
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon); // Basically code underneath first checks if openingHours exists and then checks if inside of that mon exists
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log('************ METHODS ************');
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

console.log('************ ARRAY ************');
// Array, to check for example if an Array is empty
const users = [{ name: 'Joonas', email: 'hello@fernos.io' }];
// const users = [];

console.log(users[0]?.name ?? 'Users array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty'); // SLOWER version, old way
*/
///////////////////////////////////////////////////////
/*
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// To get indexes from for-of loop
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); // The messier way, without destructuring
// }
*/
///////////////////////////////////////////////////////
/*
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // same as above
// rest2.numGuests ||= 10; // same as above

// Nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
///////////////////////////////////////////////////////
// The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*
///////////////////////////////////////////////////////
/*
// && and || - Logical operators
// Use ANY data type, return ANY data type, short-circuiting
// returns truthy value
console.log('----- OR -----');
console.log(3 || 'Fernos');
console.log('' || 'Fernos');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Fernos');
// Returns last truthy value
console.log(7 && 'Fernos');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('spinach', 'olives');
}

restaurant.orderPizza && restaurant.orderPizza('spinach', 'olives');
*/
///////////////////////////////////////////////////////
/*
// REST pattern, oppisite of SPREAD(...)

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions, REST parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 4, 1);
add(1, 3, 5, 7, 9, 2, 4, 6, 8);

const x = [23, 5, 7];
add(...x);
add(...x, 5);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'cheese');
/*
// Calling object function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});
*/
///////////////////////////////////////////////////////
/*
// The Spread operators
const arr = [7, 8, 9];
// bad way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// better
const newArr = [1, 2, ...arr];
console.log(newArr);

// To print out the elements in array
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Joonas';
const letters = [...str, '', 'K.'];
console.log(letters);

// To order from orderPasta() using prompt, real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
///////////////////////////////////////////////////////
/*
// Destructuring OBJECTS
// In destructuring objects, order doesn't matter nor are empties needed, unlike arrays
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring and to rename objects property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Using paranthesis () for objects to wrap
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

///////////////////////////////////////////////////////
// Destructuring ARRAYS
/*
const arr = [2, 3, 4];
// Slower way to assing variable
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// Destructuring, assigning variables to the array. Faster
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Without destructuring, changing places (mutating)
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// Mutating with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Defacault values
const [p = 1, q = 1, r = 1] = [8, 9];
// r becomes 1, assigned default value
console.log(p, q, r);
*/
///////////////////////////////////////
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
/*
// Coding Challenge #2
// 1.
// Entries to get an index for the loop using  for-of
for (const [i, players] of game.scored.entries()) { // x.y.entries used for arrays
  console.log(`Goal ${i + 1}: ${players}`);
}
// 2.
// assigning Object.values(game.odds) to a variable
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
// 3.
for (const [team, odd] of Object.entries(game.odds)) { // Object.entries(x.y) for Objects
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/
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
// Coding Challenge #1
// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5.
const {
  odds: { team1, team2, x: draw },
} = game;
console.log(team1, draw, team2); // nested
// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
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
