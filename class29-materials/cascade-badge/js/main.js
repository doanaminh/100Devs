//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to 
//Misty. Please create a function that reverses your list and prints it 
//to the console. 
let pokeParty = ['Bulbasaur', 'Squirtle', 'Charmander'];
const reverseParty = arr => {
    arr.reverse();
    return arr;
};
console.log (pokeParty);
reverseParty(pokeParty);
console.log(pokeParty);

//Given two integer arrays a, b, both of length >= 1, create a program 
//that returns true if the sum of the squares of each element in a is 
//strictly greater than the sum of the cubes of each element in b.

let a = [3, 4, 1, 6, 3, 4, 5,];
let b = [1, 1, 1, 1, 1,];
const compAB = (a, b) => {
    return ((a.reduce((total, current) => total + current ** 2, 0)) > (b.reduce((total, current) => total + current ** 3))) ? true : false;
};
console.log(compAB(a, b));

//Return a new array consisting of elements which are multiple of their 
//own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

let oop = [22, -6, 32, 82, 9, 25];
const elemIndex = arr => {
    return arr.reduce((total, current, index) => {
        if (current % index === 0) {
            total.push(current);
        };
        return total;
    }, [])
};
console.log(elemIndex(oop));

//Given an array of integers as strings and numbers, return the sum of 
//the array values as if all were numbers.Return your answer as a number.
let uuu = [2, 4, '6', '23',]
const sumOfStringArray = arr => {
    return arr.reduce((total, current) => total + (+current), 0);
};
console.log(sumOfStringArray(uuu));