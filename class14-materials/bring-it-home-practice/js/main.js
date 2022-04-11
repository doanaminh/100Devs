// *Variables*
// Create a variable and console log the value

const variable = 'assignment';
console.log(variable);

// Create a variable, add 10 to it, and alert the value

let x = 10;
x = x + 10;
console.log(x);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

const subFour = (a, b, c, d) => a-b-c-d;
console.log(subFour(100, 50, 25, 10));

// Create a function that divides one number by another and returns the remainder

const mod = (a, b) => a/b;
console.log(mod(72, 21));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

const addTwo = (a,b) => {
    let c = a+b;
    if ( c > 50) {
        console.log('JUMANJI');
    } else {
        console.log(c);
    }
}
addTwo();

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

const multThree = (a, b, c) => {
    let d = a*b*c;
    if (d % 3 === 0 && d != 0) {
        console.log('ZEBRA');
    } else {
        console.log(d);
    }
}
multThree();
