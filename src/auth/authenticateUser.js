import bcrypt from 'bcrypt';
import { pool } from '../db.js';

const authenticateUser = async (email, password, done) => {
    const users = await pool.query("SELECT * FROM users");
    const user = users.rows.find(user => user.email === email)
    if(user == null){
        return done(null, false, { message: 'No user with that email'})
    }

    try {
        if(await bcrypt.compare(password, user.password)){
            return done(null, user);
        }else{
            return done(null, false, { message: 'Wrong password'})
        }
    } catch (error) {
        return done(error);
    }
}

export default authenticateUser;