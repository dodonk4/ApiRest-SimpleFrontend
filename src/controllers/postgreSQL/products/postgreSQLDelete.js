import { pool } from "../../../db.js";

const postgreSQLDelete = (req, res, next) => {

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
          res.status(200).send('Product Deleted');
        }

      } catch (error) {
        next(error);
      }
      
    });

}

export default postgreSQLDelete;