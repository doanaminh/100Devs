// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = 'Topo Chico';
console.log(drink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const words = 'Water, banana, apple, taco';
let wordsArr = words.split(', ').includes('apple');
console.log(wordsArr);


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockPaperScissors = _ => {
    let result = (Math.random());
    if (result < .33) {
        return 'rock';
    } else if (result > .33 && result < .66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRPS = x => {
    const botResult = rockPaperScissors();
    if (x === 'rock' && botResult === 'scissors') {
        return 'you win!'
    } else if (x === 'paper' && botResult === 'rock') {
        return 'you win!'
    } else if (x === 'scissors' && botResult === 'paper') {
        return 'you win!'
    } else if (x === botResult) {
        return 'draw!'
    }else {
        return 'you lose'
    }
};


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const xX = arr => {
    arr.forEach((item, i) => {
        console.log(playRPS(item));
        
    })
}



