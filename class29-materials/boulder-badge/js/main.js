// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which 
//is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve 
//(rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

const pokemon = [
    {name: 'Bulbasaur', lvl: 5, firstEvolutionLvl: 16},
    {name: 'Caterpie', lvl: 1, firstEvolutionLvl: 7},
    {name: 'Weedle', lvl: 1, firstEvolutionLvl: 7},
];

let rareBulb = pokemon[0].firstEvolutionLvl - pokemon[0].lvl;
let rareCat = pokemon[1].firstEvolutionLvl - pokemon[1].lvl;
let rareWeed = pokemon[2].firstEvolutionLvl - pokemon[2].lvl;
let totalCandies = rareBulb + rareCat + rareWeed;


//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. 
//Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

const farToCel = far => {
    let cel = (far - 32) * 5 / 9;
    return cel;
};

const charBattle = currentTemp => {
    if (farToCel(currentTemp) > 0) {
        return true;
    } else {
        return false;
    }
};



//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" 
//x times where x is the number of pokemon the trainer you are battling has in their party

const taunt = x => {
    for (i = 0; i < x; i++) {
        console.log(`Pikachu, I choose you!`);
    }
};