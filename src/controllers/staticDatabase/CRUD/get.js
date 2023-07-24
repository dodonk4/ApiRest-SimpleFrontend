import vehicles from "../database/staticDatabase.js";

const staticGet = (req, res) => {
    res.send(vehicles);
};

export default staticGet;

