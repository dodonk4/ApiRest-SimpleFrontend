import bcrypt from 'bcryptjs';
import { pool } from "../db.js";

const signupReusable = async (reqBody) =>{

        const { username, password, email } = reqBody;
    
        const hashedPassword = await bcrypt.hash(password, 10);

        let amountOfUsers;

        const result = await pool.query("SELECT * FROM users");
        
        amountOfUsers = result.rows.length;

        const values = [(amountOfUsers + 1), username, email, hashedPassword]

        return values;

        
};

export default signupReusable;