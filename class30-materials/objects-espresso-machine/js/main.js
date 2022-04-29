//Create an espresso machine class that makes machines with 4 properties 
// and 3 methods

class EsspressoMachine {
    constructor(color, brand, cost, origin) {
        this.color = color;
        this.brand = brand;
        this.cost = cost;
        this.origin = origin;
    }

    load() {
        console.log('Please insert coffee')
    }

    brew() {
        console.log('Brewing...')
    }

    pour() {
        console.log('Dispensing coffee')
    }
}

const brita = new EsspressoMachine('clear', 'Brita', 50, 'America');