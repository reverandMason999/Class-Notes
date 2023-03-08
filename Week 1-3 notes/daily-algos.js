//common patterns
// const ratings = [3, 1, 5, 2, 4, 5, 3, 4, 2, 1, 3, 5, 3];

// for (let i = 0; 1 < 101; ratings.length; i++)  {
//     console.log(ratings[i]);
// }

// let sum = 0;
// for (let i = 0; 1 < 101; ratings.length; i++ ) {
//     sum = sum + ratings[i];
//     console.log("current sum", sum);
// }

// console.log("final sum", sum);

// const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];

// const guestToFind = 'Plum';

// for (let i = 0; 1 < guests.length; i++ ) {

//     if(guests[1] === guestToFind) {
//         console.log(`you found ${guestToFind}`);
//     } else {
//         console.log('keep searching...')
//     }
//  }
// const add = (x, y) => {
//     return x + y;
// }
// const result1 = add(1,2);

// console.log(result);

// const myObject ={
//     "firstName" : "Mason",
//     "lastName" : "Smith",
//     "programmingLanguage" : "javascript",
//     "bandName" : "Dungeon Filth",
//     "favoriteFood" : "sushi",
// };
// function () {

//}

// Given a string of characters as input, write a function that returns it with the characters reversed.

//const numbers = [0, 1, 2, 3, 4 ,5];

// const reverseString = (string) => {
//    //reverse the string here
//    let result = '';
//    for (let character of string) {
//       console.log (character);
//       result = character + result;
//    }
//    return result;

// }

// const myReverseString = reverseString('Mason');

// console.log(myReverseString);

// const reverseString = (string) => {
//    return string.split('').reverse().join('')
// }
// const myReverseString = reverseString('hello');

// console.log(myReverseString);

// const isAPalandrome = (string) => {
//    const stringArray = string.split('');

//    const reversedArray = stringArray.reverse();

//    const reversedString = reversedArray.join('');

//    if(string === reversedString) {
//       return true;
//    }
//    else {
//       return false;
//    }

// }
// console.log(isAPalandrome('Hello'));

// function reverse(integer) {
//    const stringFromInteger = integer.toString();

//    const reversedStringFromInteger = stringFromInteger.split('').reverse().join('');

//    const reversedInteger = parseInt(reversedStringFromInteger);

//    return reversedInteger;
// }

// console.log(reverse(1234));

// const getVowelCount = (string) => {
//    let count = 0;
//    for(let character of string) {
//       if()
//    }

// };

// console.log(getVowelCount("hello world"));

// Given an array of items, reverse the order.

// Given an array of items, reverse the order.

// function reverseArray(array) {
//    for (let i = 0; i < array.length / 2; i++) {
//      const temp = array[i];
//      const swapIndex = array.length - 1 - i;
//      array[i] = array[swapIndex];
//      array[swapIndex] = temp;
//    }

//    return array;
//  }

//  const arrayToReverse = [ 1, 2, 3, 4 ];
//  const result = reverseArray(arrayToReverse);

//  console.log(result);

// const friendArray = ["Ben", "Maggie", "Erin"];

// for (let i = 0; i < friendArray.length; i++) {
//   console.log(friendArray[i]);
// }

// function add(x, y) {
//   return x + y;
// }
// console.log(add(50, 100));

// const vowel = ["a", "e", "i", "o", "u"];

// function isAVowel(letter) {
//   for (i = 0; i < vowel.length; i++) {
//     if (letter === vowel[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(isAVowel("z"));

// // Given a phrase, reverse the order of the characters of each word.

// const reverseWords = (words) => {
//   const reversedWordsArray = [];
//   const wordsArray = words.split(' ');

//   for (let word of wordsArray) {
//     const reversedWord = word.split('').reverse().join('');
//     reversedWordsArray.push(reversedWord);
//   }

//   const reversedWords = reversedWordsArray.join(' ');

//   return reversedWords;
// }

// console.log(reverseWords('I want to ride my bicycle!'));

//bank account js class

// class bank {
//   constructor(balance, accountType) {
//     this.balance = balance;
//     this.accountType = accountType;  
//   }
//   withdrawal(amount){
//     this.balance -= amount;
//   }
  
// }

// Remove duplicates from an array.

// const array = [1, 2, 3, 4, 5, 3, 4];

// const removeDuplicates = (array) => {
// const result = array.filter(item, index) => {
    
// }
// };

// console.log(removeDuplicates(array)); // [ 1, 2, 3, 4, 5 ];

// Translate a phrase into Pig Latin.

// input: Learning JavaScript is so much fun
// output: earningLay avaScriptJay siay osay uchmay unfay

// const translateIntoPigLatin = (phrase) => {
//     const result = [''];
//     const pigLatinArray = phrase.split(' ');

//     for(let word of phraseArray) {
//         const firstLetter = word.substring(0, 1);
//         const restOfWord = word.substring(1);
//         const newWord = restOfWord + firstLetter + 'ay';
//         result.push(newWord);
//     }
    
    

// };

// console.log(translateIntoPigLatin('Learning JavaScript is so much fun'));


// For a given number of steps, print out a staircase using hashes.

// input: 4

// output:
// #
// ##
// ###
// ####

// const printStaircase = (steps) => {
//     let answer = '';
//     for(let i = 0; i < steps; i++) {
//         answer += '#';
//         console.log(answer);
//     }

// };

// printStaircase(4);

// Print all even numbers up through a given number.

// Input: 10
// Output: 
// 2
// 4
// 6
// 8
// 10

// const printEven = (num) => {
//     let answer = '';
//     for(let i = 0; i < num; i++) {
//         if(i / 2){
//             console.log(answer);
//         }
        
//     }

// }

// console.log(printEven(10));

//find the max value in an array
// const maxVaule = (nums) => {
//  let max = -Infinity;
 
//  for(let num of nums){
//     if(num > max){
//         max = num;
//     }
//  }

//  return max;

// }

// console.log(4, 7, 2, 8, 10, 9);

// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

const isPrime = (n) => {
    for(let i = 2; i < n; i ++){
        if(n % i === 0){
            return false;
        }
        return n > 1;

    }

};

console.log(isPrime(1)); // false

console.log(isPrime(2)); // true

isPrime(6); // false

isPrime(7); // true

isPrime(25); // false

isPrime(31); // true