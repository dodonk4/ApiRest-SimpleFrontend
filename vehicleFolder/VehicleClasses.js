import { Vehicle } from "./Vehicle.js";

class Monocycle extends Vehicle {
    constructor(brand, model){
        super('1', 'manual', brand, model);
    }
};

class Motorcycle extends Vehicle {
    constructor(brand, model){
        super('2', 'motor', brand, model);
    }
};

class Car extends Vehicle {
    constructor(brand, model){
        super('4', 'motor', brand, model);
    }
};

class Trailer extends Vehicle {
    constructor(brand, model){
        super('6', 'motor', brand, model);
    }
};

export { Monocycle, Motorcycle, Car, Trailer};