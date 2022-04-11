//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, style, specialMove, greeting) {
    this.name = name,
    this.style = style,
    this.specialMove = specialMove,
    this.taunt = function taunt() {
        console.log('Is that all you\'ve got?');
    },
    this.greeting = function greeting() {
        console.log('I won\'t lose');
    },
    this.attack = function attack() {
        console.log('Euuuughhh!')
    }

}

let Ryu = new StreetFighter('Ryu', 'Karate', 'Hadouken');
let Ken = new StreetFighter('Ken', 'Karate', 'Tatsoumaki');
let EHonda = new StreetFighter('E.Honda', 'Sumo', 'Headbutt');
