// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = HALLOWEEN;
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const str = 'Woozy'
console.log(str.slice(-3));


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const fiveNums = (a,b,c,d,e) => {
    let result = 100 - (a+b+c+d+e);
    result = Math.abs(result);
    console.log(result);
};
fiveNums();

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const threeNums = (a,b,c) => {
    if (a > b && a > c) {
        console.log(a)
    } if (b > a && b > c) {
        console.log(b)
    } if (c > b && c > a) {
        console.log(c)
    } 
};

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
