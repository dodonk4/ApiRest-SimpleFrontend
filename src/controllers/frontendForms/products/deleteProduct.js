import { pool } from "../../../db.js";
import deleteReusable from "../../../library/delete.js";

const deleteProduct = (req, res, next) => {

    const queryAndValues = deleteReusable(req.body);

    const query = queryAndValues[0];
    const values = queryAndValues[1];
  
    pool.query(query, values, (err, result) => {

      try {

        if (result.rowCount === 0) {
          throw new Error ("Product not found");
        }

        if (err) {
          console.error('Query error:', err);
          res.status(500).send('Query error');
        } else {
          req.flash('mensaje', 'Producto Eliminado');
          res.redirect('/userTools');
        }

      } catch (error) {
        next(error);
      }
      
    });

}

export default deleteProduct;