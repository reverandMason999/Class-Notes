// 1. Define a variable (name) that is a STRING of your name.
// const myName = "Mason";
// 2. Console log your name variable and add the string "is cool".
// console.log(myName + " is cool");
// 3. Create a new variable called daysUntilChristmas. Set this variable equal to 25 minus today's day value (1).
// const daysUntilChristmas = 25 - 20
// console.log(`${daysUntilChristmas}, days until Christmas`)
// Console log this variable preceded by the string: "Days until Christmas". Don't forget the comma!
// const frontTeeth = "my two front teeth";
// 4. Using interpolation, console log the following phrase using the variable frontTeeth:
// console.log( "All I want for Christmas is "+frontTeeth+".");
// function decemberCountdown(date, today) {
//   return date - today;
// }
// const result = decemberCountdown(31, 22);
// console.log(result)

//Exploring Arrays

const digitalCraftsCrew = ["Jonathan", "Dez", "Whitney"];
// Get the length of the array
let length = digitalCraftsCrew.length;
console.log(digitalCraftsCrew.length);
// Add a new item to the END of the array
digitalCraftsCrew.push("Mason");
//Remove item from the END of the array
const theLastItem = digitalCraftsCrew.pop();
console.log(theLastItem);
// Get the index of "Dez
const idx = digitalCraftsCrew.indexOf("Dez");
console.log(idx);

//Exploring Objects
// Follow the instructions below. As you go through the process, console log each variable to see it change!
// 1. Create a new Object representing YOU. Include they following keys: fullName, age, faveColor, and likesPizza.
const masonObject = {
  fullName: "Mason Smith",
  language: "javascript",
  age: "24",
  faveColor: "Black",
  likesPizza: true,
};
// HINT: likesPizza accepts a boolean.
// 2. Create a new variable and set it equal to the faveColor property.
masonObject.faveColor = "Blood Red";
// 3. Update your fullName to only be your last name.
masonObject.fullName = "Smith";
// 4. Delete the likesPizza property.
delete masonObject.likesPizza;
// 5. Add a new key that represents your fave food and mirrors the likesPizza. The value will represent the fact that you like it :)
// For example, likesCookies.
masonObject.likesCookies = "you know it, bud";
console.log(masonObject);

//JS 101 exercises
function makeANumber() {
  const myNum = 42;
  return myNum;
}

function makeAnInteger() {
  const myInt = 42;
  return myInt;
}

function makeAFloat() {
  const myFloat = 69.42;
  return myFloat;
}

function makeZero() {
  const zilch = 0;
  return zilch;
}

// function makeNothing () {
//   const huh;
//   return huh;
// }

function makeABoolean() {
  const myBool = true;
  return myBool;
}

function makeTrue() {
  const yep = true;
  return yep;
}

function makeFalse() {
  const nope = false;
  return nope;
}

function makeNull() {
  const nothingMuch = null;
  return nothingMuch;
}

function helloWorld() {
  return "Hello world!";
}

function helloName(name) {
  return "Hello" + name + "!";
}

function abstractLength() {
  const tarPitAbstract =
    "Complexity is the single major difficulty in the successful development of large-scale software systems. " +
    "Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. " +
    "We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. " +
    "To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codds relational model of data.";
  return tarPitAbstract.length;
}
function makeLoud() {
  const chorus = "Who let the dogs out";
  return chorus.toUpperCase();
}

// javascript practice lvl 1

function lvl1exercise1() {
  var number = null;
  return number;
}
lvl1exercise1();

function lvl1exercise2() {
  // Declare a variable with a number value and return it
}

function lvl1exercise3() {
  // Declare a variable with a floating point number value that is not a whole number and return it
}

function lvl1exercise4() {
  // Declare a variable and with a string value as "Hello World!" and return it
}

function lvl1exercise5() {
  // Declare a variable and with an array value containing the string "Hello World!" and the number 4 and return it
}

function lvl1exercise6() {
  // Declare a variable as an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
}

function lvl1exercise7() {
  // Declare a variable as a boolean value 'false' and return it
}
