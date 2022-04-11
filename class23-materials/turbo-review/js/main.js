// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const sentence = 'What in the world?';
if (sentence.contains('?'))
    console.log(sentence);


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const multWords = 'jr. dev, sr. dev, woop, poo, cheese, fart, wind';
let result = multWords.split(', ').slice(0).map(item => { item === 'jr. dev' ? 'software engineer' : item}).join(', ');


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RPS() {
    
    if (Math.floor(Math.random()) < .3) {
        return 'rock';
    } else if (Math.floor(Math.random()) < .6) {
        return 'paper';
    } else if (Math.floor(Math.random()) > .6) {
        return 'scissor';
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
