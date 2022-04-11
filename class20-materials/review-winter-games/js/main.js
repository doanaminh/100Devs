//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const arrFunction = a => {
    const arrEvenNumbers = [];
    a.forEach((x) => {
        if (x % 2 === 0) {
            arrEvenNumbers.push(x);
        }
    })
}