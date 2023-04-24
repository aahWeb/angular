class Product {
    constructor(name) {
        this._ref = 1000; // attribut protégé dans la classe actuelle et dans sa fille
        this.name = name; // le setter assigne une valeur à l'attribut _name
    }
    // setter
    set name(name) {
        this._name = name;
    }
    // getter : afficher une valeur dans le code courant
    get name() {
        return this._name;
    }
}
let bike = new Product('Super Bike');
console.log(bike.name); // affichera Super Bike
