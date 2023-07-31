import { pool } from "../../../db.js";
import putReusable from "../../../library/put.js";

const postgreSQLPut = (req, res, next) => {

    try {
        if(!req.body.id){
            throw new Error ("Product Id not provided in API");
        }
    
        if(req.body.type === "" && req.body.brand === "" && req.body.model === ""){
            throw new Error ("No parameters given to update in API");
        }
    
        const query = putReusable(req.body);
    
        pool.query(query, (err, result) => {
    
            try {
    
                if(result.rowCount === 0){
                    throw new Error ("Product not found");
                }
    
                if (err) {
                    console.error('Query error:', err);
                    res.status(500).send('Error en la consulta a la base de datos.');
                } else {
                    req.flash('mensaje', 'Producto Actualizado');
                    res.redirect('/userTools');
                }
            } catch (error) {
                next(error);
            }
    
            
        });
    } catch (error) {
        next(error);
    }

};

export default postgreSQLPut;