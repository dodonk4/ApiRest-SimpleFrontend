import { Strategy as LocalStrategy } from "passport-local";
import authenticateUser from "./authenticateUser.js";
import getUserById from "../middlewares/getUserById.js";
import { pool } from "../db.js";



const initializePassport = async (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'email' },
    authenticateUser))
    console.log('1');
    const x = passport.serializeUser((user, done) => {
        done(null, user.id)
    });
    passport.deserializeUser(async (id, done) => {
        const users = await pool.query('SELECT * FROM users');
        return done(null, users.rows.find(user => user.id === id));
    });
    console.log('3');

}

export default initializePassport;