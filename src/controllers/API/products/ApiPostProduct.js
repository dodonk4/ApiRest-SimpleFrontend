import { pool } from "../../../db.js";
import postReusable from "../../../library/post.js";


const postgreSQLPost = async (req, res, next) => {
        try {
            if(req.body.type === "" || req.body.brand === "" || req.body.model === "" || req.body.type === undefined || req.body.brand === undefined || req.body.model === undefined){
                throw new Error ("Data missing in API");
            }
    
            if(req.file === undefined){
                throw new Error ("The file is undefined in API");
            }
    
            const queryAndValues = await postReusable(req.body, req.file);
            const query = queryAndValues[0];
            const values = queryAndValues[1];
    
            await pool.query(query, values, (err, result) => {
                try {
                    if (err) {
                        console.error('Query error:', err);
                        res.status(500).send('Query error');
                    } else {
                        res.status(200).send('Product Added');
                    }
                } catch (error) {
                    next(error);
                }
    
            });
        } catch (error) {
            next(error);
        }
        
    
}

export default postgreSQLPost;