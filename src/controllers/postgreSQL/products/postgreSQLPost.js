import { pool } from "../../../db.js";


const postgreSQLPost = async (req, res, next) => {
    try {

        const { type, brand, model } = req.body;

        if(type === "" || brand === "" || model === ""){
            throw new Error ("Data missing");
        }

        if(req.file === undefined){
            throw new Error ("The file is undefined");
        }

        const { filename, mimetype, buffer } = req.file;

        const products = await pool.query("SELECT * FROM products");
        const id = products.rows.length;

        const query = `INSERT INTO products (id, type, brand, model, img) VALUES ($1, $2, $3, $4, $5)`;
        const values = [parseInt(id + 1), type, brand, model, buffer];

        await pool.query(query, values, (err, result) => {
            if (err) {
                console.error('Query error:', err);
                res.status(500).send('Error en la consulta a la base de datos.');
            } else {
                res.redirect('/products');
            }
        });
    } catch (error) {
        next(error);
    }
    

}

export default postgreSQLPost;