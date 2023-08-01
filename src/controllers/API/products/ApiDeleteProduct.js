import { pool } from "../../../db.js";
import deleteReusable from "../../../library/delete.js";

const apiDeleteProduct = (req, res, next) => {

  if(req.body.model === undefined || req.body.model === ""){
    throw new Error ("No model specified in API");
  }

  const queryAndValues = deleteReusable(req.body);

  const query = queryAndValues[0];
  const values = queryAndValues[1];

  pool.query(query, values, (err, result) => {

    try {

      if (result.rowCount === 0) {
        throw new Error ("Product not found in API");
      }

      if (err) {
        console.error('Query error:', err);
        res.status(500).send('Query error');
      } else {
        res.status(200).send('Product Deleted');
      }

    } catch (error) {
      next(error);
    }
    
  });

}

export default apiDeleteProduct;