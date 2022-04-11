//Create an array of movie titles. Loop through the array and each element to the h2.
const movie = ['Spider-Man', 'Hulk', 'Thor', 'Flash', 'Captain America'];
movie.forEach((x,i) => document.querySelector('h2').innerText += `${x}\n`);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numbers = [0, 10, 20, 30, 40, 50];
newNumbers = numbers.map(number => number + 3);
console.log(newNumbers);

//Find the average of all the numbers from question three
let total = 0;
numbers.forEach((x,i) => {
    total += x;
})
total = total / numbers.length;
console.log(total);