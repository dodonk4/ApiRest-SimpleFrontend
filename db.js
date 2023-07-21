import pg from 'pg';
const { Pool } = pg;


const pool = new Pool({
  user: 'partner',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432, // Puerto por defecto de PostgreSQL
});

export { pool };