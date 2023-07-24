import vehicles from "../database/staticDatabase.js";

const staticGetById = (req, res) => {

    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));

    if(!vehicle){

        return res.status(404).send('Vehicle not found');

    }else{
        
        res.send(vehicle)

    }
    
}

export default staticGetById;