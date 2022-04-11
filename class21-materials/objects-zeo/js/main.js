//Create a stopwatch object that has four properties and three methods
const stopwatch = {
    color: 'black',
    shape: 'octogon',
    functional: true,
    condition: 'new',
    time: 0,
    start() {
        this.time += 1;
    },
    split() {
        console.log(this.time);
    },
    stop() {
        this.time
    },
};