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



//If you haven’t seen this before and it looks strange, it’s actually straightforward. We declare a variable i and assign it 1: the initial value of the variable i in our loop. The second clause, i <= answer is our condition. We want to loop until i is greater than answer. The third clause, i++, tells our loop to increment i by 1 every iteration. As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console.

array = 5;
console.log(sumOfTripledEvens(array))

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
