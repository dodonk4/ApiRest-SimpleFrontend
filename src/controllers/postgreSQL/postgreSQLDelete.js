import { pool } from "../../db.js";

const postgreSQLDelete = (req, res) => {

    const vehicleModel = req.body.model;
  
    const query = 'DELETE FROM vehicles WHERE model = $1';
    const values = [vehicleModel];
  
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Query error:', err);
        res.status(500).send('Error en la consulta a la base de datos.');
      } else {
        req.flash('mensaje', 'Producto Eliminado');
        res.redirect('/userTools');
      }
    });

}

export default postgreSQLDelete;