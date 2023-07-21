import { Monocycle, Motorcycle, Car, Trailer } from "./VehicleClasses.js";

class VehicleFactory{

    createVehicle (wheeler, brand, model){

        if (wheeler === 1) {
            return new Monocycle(brand, model);
        }

        if (wheeler === 2) {
            return new Motorcycle(brand, model);
        }

        if (wheeler === 4) {
            return new Car(brand, model);
        }

        if (wheeler === 6) {
            return new Trailer(brand, model);
        }
        

        console.log('Error');

    }
};

export { VehicleFactory };