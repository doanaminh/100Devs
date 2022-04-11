// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = 'Quesadillas';
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let decVar = 'Oop';
alert(decVar[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const divide2Multiply = (a,b,c) => {
    let result = (a / b) * c;
    alert(result);
}
divide2Multiply(a,b,c);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRoot = (a) => {
    let result = Math.cbrt(a);
    console.log(result);
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const summerMonth = (month) => {
    switch (month.toLowerCase()) {
        case `january`: 
            console.log('Booo!')
            break;
        case `february`: 
            console.log('Booo!')
            break;
        case `march`: 
            console.log('Booo!')
            break;
        case `april`: 
            console.log('Booo!')
            break;
        case `may`: 
            console.log('Booo!')
            break;
        case `june`: 
            console.log('Yay!')
            break;
        case `july`: 
            console.log('Yay!')
            break;
        case `august`: 
            console.log('Yay!')
            break;
        case `september`: 
            console.log('Yay')
            break;
        case `october`: 
            console.log('Booo!')
            break;
        case `november`: 
            console.log('Booo!')
            break;
        case `december`: 
            console.log('Booo!')
            break;
        default:
            console.log('not a month');
            break;
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const numberPattern = (a) => {
    for(i = 0; i <= a; i++) {
        if (i % 5 !== 0 ) {
            console.log(i);
        }
    }
}