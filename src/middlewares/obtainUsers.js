import { pool } from "../db.js";

const obtainUsers = async () => {
    const users = await pool.query('SELECT * FROM users');
    return users;
}

export default obtainUsers;