import { pool } from "../../db.js";

const postgreSQLGetImage = async (req, res) => {

    try {
        const queryResult = await pool.query(
            'SELECT * FROM vehicles;'
        );

        if (queryResult.rows.length === 0) {
            return res.status(404).send('No se encontró el registro.');
        }

        const rows = queryResult.rows;

        res.json(rows)
        
    } catch (error) {
        console.error('Error en la consulta:', error);
        return res.status(500).send('Error en el servidor.');
    }
}

export default postgreSQLGetImage;