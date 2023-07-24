// import { VehicleFactory } from './VehicleFactory.js';
import express from 'express';
import { engine } from 'express-handlebars';
import Handlebars from 'handlebars';
import bodyParser from 'body-parser';
import { pool } from './db.js';
import __dirname from '../utils.js';
import path from 'path';
import multer from 'multer';
import router from './routes/index.routes.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
const port = 3000;
app.use(router);

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + '/views'));




app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/api/postgreSQL', upload.single('imagen'), (req, res) => {
    const { filename, mimetype, buffer } = req.file;

    console.log(req.file);

    const { id, wheels, type, brand, model} = req.body;

    const query = `INSERT INTO vehicles (id, wheels, type, brand, model, img) VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [parseInt(id), parseInt(wheels), type, brand, model, buffer];

    // pool.query(query, values, (err, result) => {
    //     if (err) {
    //         console.error('Query error:', err);
    //         res.status(500).send('Error en la consulta a la base de datos.');
    //     } else {
    //         res.send('Datos insertados correctamente.');
    //     }
    // });

})







app.on('close', () => {
    pool.end()
      .then(() => console.log('Database conection closed'))
      .catch(err => console.error('Database error ', err));
  });

process.on('SIGINT', () => {
server.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port} ${__dirname}!`))
