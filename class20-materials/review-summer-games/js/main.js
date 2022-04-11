//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

const arrFunction = a => {
    let result = 1;
    a.forEach((x,i) => {
        result *= x;
    })
    console.log(result);
}

arrFunction([2,3,4,1,6,4,2,5,6,4,1])

