//Create a constructor with 4 properties and 3 methods

function Pizza(brand, size, sauce, topping) {
    this.brand = brand;
    this.size = size;
    this.sauce = sauce;
    this.topping = topping;
    this.eat = function() {
        console.log('takes a bite of pizza');
    };
    this.top = function() {
        console.log('throws some cheese and red peppers');
    };
    this.burnMouth = function() {
        console.log('HAHAAASHSHSHShshshsahshashahhaa');
    };
}

let piz = new Pizza('domino', 'large');
