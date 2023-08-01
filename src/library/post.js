import { pool } from "../db.js";

const postReusable = async (reqBody, reqFile) => {
    const { type, brand, model } = reqBody;

    const { filename, mimetype, buffer } = reqFile;

    const products = await pool.query("SELECT * FROM products");
    const id = products.rows.length;

    const query = `INSERT INTO products (id, type, brand, model, img) VALUES ($1, $2, $3, $4, $5)`;
    const values = [parseInt(id + 1), type, brand, model, buffer];

    const cargo = [query, values];

    return cargo;
}

export default postReusable;