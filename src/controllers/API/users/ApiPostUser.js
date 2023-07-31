import { pool } from "../../../db.js";
import signupReusable from '../../../library/signup.js';

const signupPost = async (req, res, next) =>{
    try {
        
        if(req.body.username === "" || req.body.email === "" || req.body.password === "" || req.body.username === undefined || req.body.email === undefined || req.body.password === undefined){
            throw new Error ("Data missing");
        }

        const values = await signupReusable(req.body);

        await pool.query("INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)", values, (err, result, next) => {

            try {
                if (err) {
                    console.error('Query error:', err);
                    res.status(500).send('Query error');
                } else {
                    res.status(200).send("User saved");
                }

            } catch (error) {
                next(error);
            }
        })
    
        res.redirect('login');

      } catch (error) {
        next(error);
      }
};

export default signupPost;