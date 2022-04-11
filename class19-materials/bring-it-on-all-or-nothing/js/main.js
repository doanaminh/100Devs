// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const twoChainz = true;
console.log(twoChainz);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor;
favColor = green;
console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const sumThreeDivideFourth = (a, b, c, d) => {
    return (a + b + c) / d;
}
console.log(sumThreeDivideFourth(2, 2, 2, 2));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const powerRule = (a, b) => {
    let result = 1;
    for (i = 0; i < b; i++) {
        result *= a;
    }
    console.log(result);
}
console.log(powerRule(2,3));

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
const alertTrueClFalse = (a,b) => {
    return a ? alert(b) : console.log(b); 
}
alertTrueClFalse(true, 'truuuuuuuuu');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
const fizzBuzz = n => {
    for (i = 1; i <= n; i++) {
        let result = '';
        if (i % 3 === 0) {result += 'fizz'};
        if (i % 5 === 0) {result += 'buzz'};
        if (i % 3 !== 0 && i % 5 !== 0) {result = i};
        console.log(result);
    }
}
fizzBuzz(10);