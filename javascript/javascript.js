let firstname = "john";
let lastname = "doe";
let age = 30;

console.log(firstname);
console.log(lastname);
console.log(age);

age = 35;

console.log(age);

const pi = 3.14;

// pi = 10; - CONST's kan ikke overrides. Så den vil fejle her.

console.log(pi);

// Numbers

let numbersmath = (3 + 2) - 76 * (1 + 1);

console.log(numbersmath);

console.log(23 + 97);

console.log(23 + 97 + 24 + 96 + 25 + 95);

console.log((4 + 6 + 9) / 77);

let a = 10;

console.log(a);

a = 25;

console.log(a);

let b = 7 * a;

console.log(b);

const max = 57;

const actual = max - 13;

const percentage = actual / max;

console.log(percentage);

// mozilla

const string = "The revolution will not be televised.";

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const name = "Mortiis";
const greeting = `Greetings, ${name}`;
console.log(greeting); // "Greetings, Mortiis"

const one = "Greetings, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Greetings ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const greeting2 = "Greetings";
const name2 = "Mefisto";
console.log(greeting2 + ", " + name2);

const greeting3 = "Hola";
const name3 = "Hellhammer";
console.log(`${greeting3}, ${name3}`);

const song = "Født til å herske";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
    }%`;
console.log(output);

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

const newline2 = "One day you finally knew\nwhat you had to do, and began";
console.log(newline2);

const goodQuotes1 = 'Og jesus sagde "Herre jemini"';
const goodQuotes2 = `Jesus sagde "jeg går ik derind igen fister"`;

const stormund = 'I\'ve got an addiction it needs more cowbell';
console.log(stormund);

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number);

const myNumberString = "666";
const myNums = Number(myNumberString);
console.log(typeof myNums);

const myNums2 = "666";
const myString2 = String(myNums2);
console.log(typeof myString2);

function add7(num) {
    return num + 7;
}

console.log(add7(10));

function multiply(numb1, numb2) {
    return numb1 * numb2;
} 

console.log(multiply(3, 2));

function capitalize(letters) {
    return letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

function lastLetter(lastLet) {
    return lastLet.slice(3);
}

console.log(lastLetter("abcd"));

// Fizz Buzz

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// tæl op til det ønskede nummer. i er nummeret vi starter på. i <= answer; er det mål vi gerne vil nå, dvs. vi vil gerne loope indtil i er større end answer. i++ siger at vores loop skal gå op for hver iteration. 
for (let i = 1; i <= answer; i++) { // let i = 1; betydeer at i er 1. 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//If you haven’t seen this before and it looks strange, it’s actually straightforward. We declare a variable i and assign it 1: the initial value of the variable i in our loop. The second clause, i <= answer is our condition. We want to loop until i is greater than answer. The third clause, i++, tells our loop to increment i by 1 every iteration. As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console.