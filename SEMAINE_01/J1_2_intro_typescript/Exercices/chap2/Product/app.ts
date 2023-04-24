class Product {
    private _name: string; // attribut privé dans la classe actuelle
    protected _ref: number = 1000; // attribut protégé dans la classe actuelle et dans sa fille

    constructor(name: string) {
        this.name = name; // le setter assigne une valeur à l'attribut _name
    }
    
    // setter
    set name(name: string) {
        this._name = name;
    }
    
    // getter : afficher une valeur dans le code courant
    get name():string {
        return this._name;
    }
}

let bike = new Product('Super Bike');

console.log(bike.name) // affichera Super Bike