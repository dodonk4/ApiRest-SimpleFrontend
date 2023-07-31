import { pool } from "../../../db.js";
import postReusable from "../../../library/post.js";


const postProduct = async (req, res, next) => {
    
        if(req.body.type === "" || req.body.brand === "" || req.body.model === ""){
            throw new Error ("Data missing");
        }

        if(req.file === undefined){
            throw new Error ("The file is undefined");
        }

        const queryAndValues = postReusable(req.body, req.file);
        const query = queryAndValues[0];
        const values = queryAndValues[0];


        await pool.query(query, values, (err, result) => {
            try {
                if (err) {
                    console.error('Query error:', err);
                    res.status(500).send('Error en la consulta a la base de datos.');
                } else {
                    res.redirect('/products');
                }
            } catch (error) {
                next(error);
            }
        });
    
    

}

export default postProduct;