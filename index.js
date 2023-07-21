// import { VehicleFactory } from './VehicleFactory.js';
import express  from 'express';
import bodyParser from 'body-parser';
import { pool } from './db';

const app = express()
const port = 3000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const factory = new VehicleFactory;

// const monocycle = factory.createVehicle(1, 'Fiat', 'Fauna');
// console.log(monocycle.description());
// console.log(monocycle.returnInformationInJsonFormat());

const vehicles = [
    {id: 1, wheels: 1, type: 'manual', model: 'Fauna', brand: 'Fiat'},
    {id: 2, wheels: 2, type: 'motor', model: 'Garruna', brand: 'Zabella'},
    {id: 3, wheels: 4, type: 'motor', model: 'Opack', brand: 'Audi'},
    {id: 4, wheels: 6, type: 'motor', model: 'Canon', brand: 'Scania'}
]

app.get('/', (req, res) => {
    res.send('Node Js Api')
    //Aca se debería de mandar a al pagina
});

app.get('/api/vehicles', (req, res) => {
  res.send(vehicles)
})

app.get('/api/vehicles/:id', (req, res) => {

    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));

    if(!vehicle){

        return res.status(404).send('Vehicle not found');

    }else{
        
        res.send(vehicle)

    }
    
})

app.post('/api/vehicles', function (req, res) {

    const vehicle = {

        id: vehicles.length + 1,

        wheels: parseInt(req.body.wheels),

        type: req.body.type,

        model: req.body.model,
        
        brand: req.body.brand,
    };

    vehicles.push(vehicle);

    res.send(vehicle)

})

app.delete('/api/vehicles/:id', (req, res) => {

    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));

    if(!vehicle){

        return res.status(404).send('Vehicle not found');

    }else{

        const index = vehicles.indexOf(vehicle);

        vehicles.splice(index, 1);
        
        res.send(`The vehicle with the id ${vehicle.id} and the model ${vehicle.model} has been deleted`);

    }
})

app.put('/api/vehicles/:id', function(req, res) {
    
    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id))

    const updatedVehicle = req.body;

    console.log(req.body);

    if(!vehicle){

        return res.status(404).send('Vehicle not found');

    }else{

        vehicle.wheels = updatedVehicle.wheels;
        vehicle.type = updatedVehicle.type;
        vehicle.brand = updatedVehicle.brand;
        vehicle.model = updatedVehicle.model;
        
        res.send(vehicle);

    }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
