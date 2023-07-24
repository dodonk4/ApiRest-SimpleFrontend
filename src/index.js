// import { VehicleFactory } from './VehicleFactory.js';
import express from 'express';
import { engine } from 'express-handlebars';
import Handlebars from 'handlebars';
import bodyParser from 'body-parser';
import { pool } from './db.js';
import __dirname from '../utils.js';
import path from 'path';


// console.log(__filename);


const app = express();
const port = 3000;

// app.use(
//     '/static',
//     express.static(path.join(__dirname, 'public')),
//   );

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + '/views'));




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
    // res.send('Node Js Api')
    res.render('products');
    //Aca se debería de mandar a al pagina
});

app.get('/products', (req, res) => {
    // res.send('Node Js Api')
    res.render('products');
    //Aca se debería de mandar a al pagina
});

app.get('/about-us', (req, res) => {
    // res.send('Node Js Api')
    res.render('about-us');
    //Aca se debería de mandar a al pagina
});

app.get('/settings', (req, res) => {
    // res.send('Node Js Api')
    res.render('settings');
    //Aca se debería de mandar a al pagina
});

app.get('/api/vehicles', (req, res) => {
  res.send(vehicles);
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

app.get('/api/postgreSQL', (req, res) => {
    pool.query('SELECT * FROM vehicles', (err, result) => {
        if (err) {
            console.error('Query error:', err)
        } else {
            res.send(result.rows)
        }
    })
})

app.post('/api/postgreSQL', (req, res) => {
    const { id, wheels, type, brand, model } = req.body;

    const query = `INSERT INTO vehicles (id, wheels, type, brand, model) VALUES ($1, $2, $3, $4, $5)`;
    const values = [parseInt(id), parseInt(wheels), type, brand, model];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Query error:', err);
            res.status(500).send('Error en la consulta a la base de datos.');
        } else {
            res.send('Datos insertados correctamente.');
        }
    });

})

app.delete('/api/postgreSQL/:id', (req, res) => {

    const vehicleId = parseInt(req.params.id);
  
    const query = 'DELETE FROM vehicles WHERE id = $1';
    const values = [vehicleId];
  
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Query error:', err);
        res.status(500).send('Error en la consulta a la base de datos.');
      } else {
        res.send('Vehículo eliminado correctamente.');
      }
    });

  });

  app.put('/api/postgreSQL/:id', (req, res) => {

    const vehicleId = parseInt(req.params.id);
    const updatedVehicle = req.body;

    if(!vehicleId){

        return res.status(404).send('Vehicle not found');

    }else{
    
        let array = [];
        let array2 = ['id', 'wheels', 'type', 'brand', 'model'];

        let pieceOfQueryArray = [];
        let pieceOfQuery = '';
        
        array.push(updatedVehicle.id);
        array.push(updatedVehicle.wheels);
        array.push(updatedVehicle.type);
        array.push(updatedVehicle.brand);
        array.push(updatedVehicle.model);
        
        for (let i = 0; i < array.length; i++){

            if(array[i] != undefined){

                pieceOfQueryArray.push(`${array2[i]} = '${array[i]}'`);

            }   
        }

        for (let i = 0; i < pieceOfQueryArray.length; i++) {

            pieceOfQuery += pieceOfQueryArray[i];

            if (i < pieceOfQueryArray.length - 1) {

                pieceOfQuery += ',';
    
            }else{

                pieceOfQuery += ` where id = ${vehicleId}`;

            }
            
        }

        const query = `UPDATE vehicles SET ${pieceOfQuery}`;
        console.log(query);

        pool.query(query, (err, result) => {
            if (err) {
                console.error('Query error:', err);
                res.status(500).send('Error en la consulta a la base de datos.');
            } else {
                res.send('Producto actualizado correctamente.');
            }
        });
    }
    
});



app.on('close', () => {
    pool.end()
      .then(() => console.log('Database conection closed'))
      .catch(err => console.error('Database error ', err));
  });

process.on('SIGINT', () => {
server.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port} ${__dirname}!`))
