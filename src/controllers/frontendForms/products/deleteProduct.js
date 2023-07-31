import { pool } from "../../../db.js";

const deleteProduct = (req, res, next) => {

    if(req.body.model === undefined || req.body.model === ""){
      throw new Error ("No model specified");
    }

    console.log(req.body.model);

    const productModel = req.body.model;
  
    const query = 'DELETE FROM products WHERE model = $1';
    const values = [productModel];
  
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