import { pool } from "../../../db.js";

const apiGetUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Query error:', err)
        } else {
            res.send(result.rows)
        }
    })
}

export default apiGetUsers;
