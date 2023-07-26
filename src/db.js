import pg from 'pg';
const { Pool } = pg;


// const pool = new Pool({
//   user: 'partner',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432, // Puerto por defecto de PostgreSQL
// });

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL;
// });

let pool;

if (process.env.DATABASE_URL) {
  // En producción (Render), utiliza la conexión del archivo .env (DATABASE_URL)
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {
  // En entorno local, utiliza la conexión interna
  pool = new Pool({
    user: 'partner',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432, // Puerto por defecto de PostgreSQL
  });
}


export { pool };