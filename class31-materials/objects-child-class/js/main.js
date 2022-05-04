/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Animal Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
class Animal {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    speak() {
        console.log(`${this._name} makes a sound.`)
    }
}
// Animal Subclasses
class Domesticated extends Animal {
    constructor() {

    }
}

class Feral extends Animal {

}
