import { pool } from "../../db.js";

const postgreSQLGet = (req, res) => {
    pool.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.error('Query error:', err)
        } else {
            res.send(result.rows)
        }
    })
}

export default postgreSQLGet;