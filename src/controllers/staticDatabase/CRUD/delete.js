import vehicles from "../database/staticDatabase.js";

const staticDelete = (req, res) => {

    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));

    if(!vehicle){

        return res.status(404).send('Vehicle not found');

    }else{

        const index = vehicles.indexOf(vehicle);

        vehicles.splice(index, 1);
        
        res.send(`The vehicle with the id ${vehicle.id} and the model ${vehicle.model} has been deleted`);

    }
}

export default staticDelete;