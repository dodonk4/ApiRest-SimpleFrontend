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

// if (process.env.DATABASE_URL) {
  // En producción (Render), utiliza la conexión del archivo .env (DATABASE_URL)
  pool = new Pool({
    connectionString: "postgres://default:X82EWVtnZKbF@ep-silent-leaf-40142531.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
    // user: process.env.POSTGRES_USER,
    // host: process.env.POSTGRES_HOST,
    // database: process.env.POSTGRES_DATABASE,
    // password: process.env.POSTGRES_PASSWORD,
    // port: 5432, // Puerto por defecto de PostgreSQL
  });

// } else {
//   // En entorno local, utiliza la conexión interna
//   pool = new Pool({
//     user: 'partner',
//     host: 'localhost',
//     database: 'api',
//     password: 'password',
//     port: 5432, // Puerto por defecto de PostgreSQL
//   });
// }


export { pool };
