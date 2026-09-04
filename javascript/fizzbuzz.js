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