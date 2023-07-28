import { pool } from "../../db.js";




const loginGet = async (req, res) =>{
    const users = await pool.query("SELECT * FROM users");
    res.render('login');
    console.log(users.rows);
};

export default loginGet; 
