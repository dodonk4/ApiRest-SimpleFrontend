import { pool } from "../../../db.js";
import putReusable from "../../../library/put.js";


const putProduct = async (req, res, next) => {

    try {

        if(!req.body.id){
            throw new Error ("Product Id not provided");
        }
    
        if(req.body.type === "" && req.body.brand === "" && req.body.model === "" && req.file === undefined){
            throw new Error ("No parameters given to update");
        }
    
        const queryAndValues = await putReusable(req.body, req.file);

        const query = queryAndValues[0];
        const values = queryAndValues[1];

        pool.query(query, values, (err, result) => {
    
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
    
}

export default putProduct;