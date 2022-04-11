//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [2, 4, 21, 1, 5, 2, 66, 32, 8, 86];
let sum = nums.reduce((total, current) => total + current, 0);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let square = nums.map(item => item * item);


//Create a function that takes string
//Print the reverse of that string to the console
let str = 'wooliregocheeky';
let reversedStr = str.split('').reverse().join('');


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function pali(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? true : false;
}

