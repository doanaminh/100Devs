//--- Easy
//create a variable and assign it a number
let x = 0;
//minus 10 from that number
x -= 10;
//print that number to the console
console.log(x);
//--- Medium
//create a variable that holds a value from the input
let y = document.querySelector('#danceDanceRevolution').value;
//add 25 to that number
y += 25;
//alert that number
console.log(y);
//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum);
function sum(x,y) {
    let result = x + y;
    console.log(result);
}