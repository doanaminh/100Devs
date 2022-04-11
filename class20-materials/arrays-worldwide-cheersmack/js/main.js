//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
const createNumberArray = number => {
    const numberArray = [];
    for(i = 0; i <= number; i++) {
        numberArray.push(i);
    }
    console.log(numberArray);
}