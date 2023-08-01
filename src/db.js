import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

let pool;

if (process.env.DATABASE_URL) {//For deployment
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {//For local testing
  pool = new Pool({
    user: 'partner',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
  });
}


export { pool };
