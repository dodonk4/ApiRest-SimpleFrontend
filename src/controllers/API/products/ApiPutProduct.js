import { pool } from "../../../db.js";
import putReusable from "../../../library/put.js";

const apiPutProduct = async (req, res, next) => {

    try {
        
        if(!req.body.id){
            throw new Error ("Product Id not provided in API");
        }
    
        if(req.body.type === "" && req.body.brand === "" && req.body.model === ""){
            throw new Error ("No parameters given to update in API");
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
                    res.status(500).send('Query error');
                } else {
                    res.status(200).send('Product Updated');
                }
            } catch (error) {
                next(error);
            }
    
            
        });
    } catch (error) {
        next(error);
    }

};

export default apiPutProduct;