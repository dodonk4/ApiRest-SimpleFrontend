import { pool } from "../../db.js";

const postgreSQLDelete = (req, res) => {

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

}

export default postgreSQLDelete;