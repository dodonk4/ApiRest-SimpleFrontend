import vehicles from "../database/staticDatabase.js";

const staticPost = (req, res) => {

    const vehicle = {

        id: vehicles.length + 1,

        wheels: parseInt(req.body.wheels),

        type: req.body.type,

        model: req.body.model,
        
        brand: req.body.brand,
    };

    vehicles.push(vehicle);

    res.send(vehicle)

}

export default staticPost;