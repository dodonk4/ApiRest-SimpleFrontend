import { pool } from "../../../db.js";
import deleteReusable from "../../../library/delete.js";

const deleteProduct = async (req, res, next) => {

  if(req.body.model === undefined || req.body.model === ""){
    throw new Error ("No model specified");
  }

  const productIdQueryResult = await pool.query(`SELECT id FROM products WHERE model = '${req.body.model}';`);
  const productId = productIdQueryResult.rows[0].id;
  const tableLengthQueryResult = await pool.query(`SELECT COUNT(*) FROM products;`);
  const tableLength = tableLengthQueryResult.rows[0].count;

  const queryAndValues = deleteReusable(req.body);

  const query = queryAndValues[0];
  const values = queryAndValues[1];


  pool.query(query, values, async (err, result) => {

    try {

      if (result.rowCount === 0) {
        throw new Error ("Product not found");
      }

      if (err) {
        console.error('Query error:', err);
        res.status(500).send('Query error');
      } else {
        //This works to makes the Id change scalable and coherent. If product 2 is deleted, product 3 will be product 2
        for (let i = productId + 1; i <= tableLength; i++) {
          const individualQueryToUpdateAnIdProduct = `UPDATE products SET id = ${i - 1} where id = ${i}`;
          await pool.query(individualQueryToUpdateAnIdProduct);
        }
        //
        req.flash('mensaje', 'Producto Eliminado');
        res.redirect('/userTools');
      }

    } catch (error) {
      next(error);
    }
    
  });

}

export default deleteProduct;