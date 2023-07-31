import bcrypt from 'bcryptjs';
import { pool } from "../../../db.js";
import signupReusable from '../../../library/signup.js';

const signupAPI = async (req, res, next) =>{
    try {

        if(req.body.username === "" || req.body.password === "" || req.body.email === ""){
            throw new Error ("Data missing");
        }

        const values = await signupReusable(req.body);

        await pool.query("INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)", values, (err, result) => {
            if (err) {
                console.error('Query error:', err);
            }
        })
    
        res.status(200).json({ mensaje: 'Registrado exitosamente' });
    
      } catch (error) {
        // console.log(error);
        res.json({error: error.message});
      }
};

export default signupAPI;