import bcrypt from 'bcryptjs';
import { pool } from "../../db.js";

const signupPost = async (req, res) =>{
    try {
        const { username, password, email } = req.body;
    
        const hashedPassword = await bcrypt.hash(password, 10);

        let amountOfUsers;

        const result = await pool.query("SELECT * FROM users");
        
        amountOfUsers = result.rows.length;

        const values = [(amountOfUsers + 1), username, email, hashedPassword]

        await pool.query("INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)", values, (err, result) => {
            if (err) {
                console.error('Query error:', err);
            }
        })
    
        res.redirect('login');

      } catch (error) {
        console.error('Error al registrarse:', error);
        res.status(500).json({ mensaje: 'Error al registrarse' });
      }
};

export default signupPost;