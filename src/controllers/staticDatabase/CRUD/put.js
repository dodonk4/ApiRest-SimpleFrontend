import vehicles from "../database/staticDatabase.js";

const staticPut = (req, res) => {
      
    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id))

    const updatedVehicle = req.body;

    if(!vehicle){

        return res.status(404).send('Vehicle not found');

    }else{

        vehicle.wheels = updatedVehicle.wheels;
        vehicle.type = updatedVehicle.type;
        vehicle.brand = updatedVehicle.brand;
        vehicle.model = updatedVehicle.model;
        
        res.send(vehicle);

    }

}

export default staticPut;