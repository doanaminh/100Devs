//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const num = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]
const sum = arr => {
    return arr.reduce((total, current) => total + current, 0)
};


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const square = arr => {
    return arr.map(item => item * item);
};



//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = str => {
    let result = str.split('');
    result = result.reverse();
    result = result.join('');
    console.log(result);
};



//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindrome = str => {
    str = str.split(' ');
    str = str.join('');
    let l = str.length - 1;
    for (i = 0; i < l; i++) {
        let x = str[i];
        let y = str[l - i];
        if (x != y) {
            return false;
        }
    }
    return true;
}


