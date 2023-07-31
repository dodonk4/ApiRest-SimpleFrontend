import { pool } from "../../../db.js";

const postgreSQLUsersGet = (req, res) => {
    pool.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Query error:', err)
        } else {
            res.send(result.rows)
        }
    })
}

export default postgreSQLUsersGet;
