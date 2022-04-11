//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tv = [
    'Rick and Morty',
    'The Simpsons',
    'Futurama'
];
tv.forEach((item, i) => console.log(item));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const nums = [
    1, 2, 3, 4, 5, 6
];
let even = nums.filter((item) => item % 2 === 0);
console.log(even);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const sum = arr => {
    let result = arr.map((item, i) => i === 1 || i === i.length - 1)
    result = result.reduce((total, x) => total + x, 0)
};