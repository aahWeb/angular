
// decorator readonly 
function readonly(target, key, descriptor) {

    console.log(target, key)
    console.log(descriptor)
    descriptor.writable = true; 

    return descriptor;
}

// un deuxième décorateur

function modify(m: string) {
    let newModel = m;
    console.log(m)

    return function (target, key, descriptor) {
        descriptor.value = () => newModel;
    };
}

class Bike {
    @readonly
    speed () {
        return 8;
    }

    @modify("NORMAL")
    model() { return 'normal'; }
}

const b1 = new Bike();

console.log(b1.speed())

b1.speed = () => 7;

console.log(b1.speed())

console.log(b1.model())

// ajouter à la classe une méthode total qui par défaut donne le total de deux valeurs a, b en paramètre, définissez un décorateur permettant d'appliquer à au total une tva définie