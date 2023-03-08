// This is a single line comment : This will be ignored by JavaScript, i.e. it will not be executed 
// Create 4 string variables : a firstName, a lastName, currentDate (ex: 10/28/2021 date would be 28), and programming language

const firstName = "Mason";
const lastName ="Smith";
//const currentDate = "12/20/22";
const programmingLanguage = "Javascript"
console.log(programmingLanguage);
console.log();

// Create a function that introduces yourself: It should take 2 parameters: a first name and a last name
function introduction(myName) {
    const currentMonth = "December";
    const currentYear = 2022;
    console.log(`Hello! My name is ${myName}`);
    console.log();
    console.log("It's great to be learning new exciting skills");
    console.log();
    console.log("It is currently "+currentMonth+", my favorite time of year!");
    console.log()
    console.log("I am currently learning to program in "+programmingLanguage+", so cool!");
    console.log();
    console.log("I now know how to use variables and functions!");
    console.log();

}
introduction("Mason");

// inside the function block create 2 variables; 1 string and another number: currentMonth and currentYear DONE
// let's introduce ourself with console.log and template literals; i.e. `I am an example of a template literal`
// ex. Hello! My name is firstName lastName < pass in your parameters
// ex. The date is the currentDate of currentMonth, currentYear
// ex. I am currently learning how to program in programming language
// ex. Change the value of the programming language variable
// Add a console.log to output programming language 
// ex. And I'm learning language
// ex. I now know how to make a variables and functions
// exit out of the function
// console.log a global scoped variable; i.e. a variable not defined in a code block
// console.log a local scoped variable defined in the function block


    //Arrays

// We are introducing ourselves again. Same setup but with ARRAYS
// Create 2 array variables. One with only strings and the other with only numbers.
// The string array will have our firstName, lastName, and programming language
// The number array will have the date
let devInfo = ["Mason", "Smith", "javaScript"]
let currentDate = [12, 20, 2022]
// Create a function that introduces yourself BUT with ARRAYS : It should take 2 parameters: a string array and a number array
function introductionArray(devInfo, currentDate) {
    console.log(`Hi! My name is ${devInfo[0]}`);
    console.log();
    console.log(`I'm currently learning ${devInfo[2]}!`);
    console.log();
    console.log(`The current date is ${currentDate}`);
    console.log();
    console.log("After making this, I understand how to make functions and arrays!")
    console.log();
}
introductionArray(devInfo, currentDate);
    


let languages = ["HTML", "CSS", "Javascript", "React", "Bananas"]
const theLastItem = languages.pop();
languages.push("Python");
console.log(`Wait! I'm not learning ${theLastItem}`);
console.log(`I am currently learning ${languages}`);
console.log();

function reintroduceMyself(languages) {
    console.log(`Hi again! My name is Mason! `);
    console.log();
    console.log(`I'm currently learning ${languages[2]}`);
    console.log();
    console.log(`Eventually I would lke to learn ${languages[4]}`);
    console.log();
    console.log(`Honestly, I'm a little nervous to learn ${languages[0]} and ${languages[1]}`);
    console.log();
    console.log(`${languages[2]} is a little difficult to understand`);
    console.log;
}
reintroduceMyself(languages);


